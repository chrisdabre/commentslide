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