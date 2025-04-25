'use server'

import { client } from "@/lib/prisma"

//creating the automations
export const createAutomation = async ( clerkId: string ) => {

    return await client.user.update({
        where: {
            clerkid: clerkId,
        },
        data: {
            automations: {
                create: {},
            },
        },
    })
}