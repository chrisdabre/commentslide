'use server'

import { client } from "@/lib/prisma"

//creating the automations
export const createAutomation = async ( clerkId: string, id?: string ) => {

    return await client.user.update({
        where: {
            clerkid: clerkId,
        },
        data: {
            automations: {
                create: {
                    ...(id && { id }) //4:44:30
                },
            },
        },
    })
}

//get the autmomations from the db in an ascending order and include
//the keywords and the listener. listener says if the automation is active or not and if we want to actively listen for it
export const getAutomations = async ( clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkid: clerkId,
        },
        select: {
            automations: {
                orderBy: {
                    createdAt: 'asc'
                },
                include: {
                    keywords: true,
                    listener: true
                },
            },
        },
    })
}