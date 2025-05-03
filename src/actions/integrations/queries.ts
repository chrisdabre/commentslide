'use server'

import { client } from "@/lib/prisma"


//Update the DB with the new token and the new expires_at date
export const updateIntegration = async ( token: string, expire: Date, id: string) => {
    return await client.integrations.update({
        where: { id },
        data: {
            token,
            expiresAt: expire
        }
    })
}

//9:06:26
export const getIntegration = async(clerkid: string) => {
    return await client.user.findUnique({
        where: {
            clerkid,
        },
        select: {
            Integrations: {
                where: {
                    name: 'INSTAGRAM'
                }
            }
        }
    })
}


//9:14:16
export const createIntegration = async(
    clerkid: string,
    token: string,
    expire: Date,
    igId: string
) => {
    return await client.user.update({
        where: {
            clerkid
        },
        data: {
            Integrations: {
                create: {
                    token,
                    expiresAt: expire,
                    instagramId: igId,
                },
            },
        },
        select: {
            firstname: true,
            lastname: true
        },
    })
}