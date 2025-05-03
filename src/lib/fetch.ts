import axios from 'axios'

//Using axios to make the http calls to instagram for refreshing the tokens
export const refreshToken = async (token: string) => {
    const refresh_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`)

    return refresh_token.data
}

//8:29:19 sending the instagram message
export const sendDM = async (userId: string, receiverId: string, prompt: string, token: string) => {
    console.log('sending message')
    
    return await axios.post(`${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/${userId}/messages`, 
        {
            recipient: {
                id: receiverId,
            },
            message: {
                text: prompt,
            },
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        },
    )
}


//9:08:13
//generates the token from instagram
export const generateTokens = async (code: string) => {
    const insta_form = new FormData()

    insta_form.append('client_id', process.env.INSTAGRAM_CLIENT_ID as string)

    insta_form.append('client_secret', process.env.INSTAGRAM_CLIENT_SECRET as string)

    insta_form.append('grant_type', 'authorization_code')

    insta_form.append('redirect_uri', `${process.env.NEXT_PUBLIC_HOST_URL}/callback/instagram` )

    insta_form.append('code', code)


    //using fetch as axios wasn't working
    const shortTokenRes = await fetch(process.env.INSTAGRAM_TOKEN_URL as string, 
        {
            method: 'POST',
            body: insta_form
        }
    )

    const token = await shortTokenRes.json()

    if(token.permissions.length > 0) {
        console.log(token, 'got permissions')
        const long_token = await axios.get(
            `${process.env.INSTAGRAM_BASE_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${token.access_token}`
        )

        return long_token.data
    }

}