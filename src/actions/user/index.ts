'use server'

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const onCurrentUser = async () => {
    const user = await currentUser()

    if(!user) {
        return redirect('/sign-in')
    }
    return user
}
