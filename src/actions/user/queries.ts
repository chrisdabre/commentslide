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