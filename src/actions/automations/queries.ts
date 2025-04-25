'use server'

import { client } from "@/lib/prisma"


export const createAutomation = async ( clerkId: string ) => {

    return await client.user.update({
        where: {
            clerkid: clerkId,
        },
        data: {
            automations: {
                create: {},
            }
        }
    })
}