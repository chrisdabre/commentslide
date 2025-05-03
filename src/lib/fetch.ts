import axios from 'axios'

//Using axios to make the http calls to instagram for refreshing the tokens
export const refreshToken = async (token: string) => {
    const refresh_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`)

    return refresh_token.data
}

//8:29:19
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