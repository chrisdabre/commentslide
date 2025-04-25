'use server'

import { client } from "@/lib/prisma"

export const findUser = async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkid: clerkId,
        },
        include: {
            subscription: true,
            Integrations: {
                select: {
                    id: true,
                    token: true,
                    expiresAt: true,
                    name: true,
                },
            },
        },
    })
}

//Creating a user
export const createUser = async (clerkId: string, firstname: string, lastname: string, email: string) => {
    //Can be wrong 3:48:58
    return await client.user.create({
        data: {
            clerkid: clerkId,
            firstname,
            lastname,
            email,
            subscription: {
                create: {},
            },
        },
        select: {
            firstname: true,
            lastname: true
        }
    })
}