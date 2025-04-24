'use server'

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { findUser } from "./queries"

//Validating a user
export const onCurrentUser = async () => {
    const user = await currentUser()

    if(!user) {
        return redirect('/sign-in')
    }
    return user
}

export const onboardUser = async () => {
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

                    const refresh = await 
                }
            }
        }
    } catch (error) {}
}