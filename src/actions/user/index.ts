'use server'

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, findUser, updateSubscription } from "./queries"
import { refreshToken } from "@/lib/fetch"
import { updateIntegration } from "../integrations/queries"
import { stripe } from "@/app/(protected)/api/payment/route"

//Validating a user
export const onCurrentUser = async () => {
    const user = await currentUser()

    if(!user) {
        return redirect('/sign-in')
    }
    return user
}

//get user data, refresh insta token
export const onboardUser = async () => {
    
    //If a user is found:
    const user = await onCurrentUser()

    try{
        const found = await findUser(user.id)
        if (found) {
            if(found.Integrations.length>0){
                const today = new Date ()
                const time_left = found.Integrations[0].expiresAt?.getTime()! - today.getTime() /* 3:40:20 */
                const days = Math.round(time_left / (1000 * 3600 * 24)) //Instagram gives a refresh token and we're trying to find out how many days are left for the token to refresh

                if(days < 5) {
                    console.log('Refreshing token less than 5 days')
                    //3:41:30
                    const refresh = await refreshToken(
                        found.Integrations[0].token
                    )

                    const today = new Date ()
                    const expire_date = today.setDate(today.getDate() + 60) //Giving the token time to expire
                    //Then we update the token in our db and give the user the new token

                    const update_token = await updateIntegration(
                        refresh.access_token,
                        new Date(expire_date),
                        found.Integrations[0].id
                    )
                    
                    if(!update_token) {
                        console.log('Update token failed')
                    }
                }
            }

            return {
                status: 200,
                data: {
                    firstname: found.firstname,
                    lastname: found.lastname
                }
            }
        }

        //if !user; Create a user 
        const created = await createUser(
            user.id,
            user.firstName!,
            user.lastName!,
            user.emailAddresses[0].emailAddress
        )

        return { 
            status: 200, 
            data: created
        }

    } catch (error) {
        console.log(error)
        return { status: 500 }
    }
}


export const onUserInfo = async () => {
    const user = await onCurrentUser()

    try {
        const profile = await findUser(user.id)

        if (profile) {
            return {
                status: 200,
                success: true,
                data: profile
            }
        }

        return {
            status: 404,
            success: false,
            error: 'User Not Found'
        }
    } catch (error) {
        return {
            status: 500
        }
    }
}


//7;53;10
export const onSubscribe = async (session_id: string) => {
    const user = await onCurrentUser()

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id)

        if(session) {
            const subscribed = await updateSubscription(user.id, {
                customerId: session.customer as string,
                plan: 'PRO',
            })
            
            if (subscribed) return {
                status: 200,
                data: 'You have subscribed successfully!'
            }
            return {
                status: 401
            }
        }
        return {
            status: 404
        }

    } catch (error) {
        return {
            status: 500,
            data: 'Internal Server error'
        }
    }
}