
//8:19:48
import { client } from "@/lib/prisma"

export const matchKeyword = async (keyword: string) => {
    return await client.keyword.findFirst({
        where: {
            word: {
                equals: keyword,
                mode: 'insensitive'
            },
        },
    })
}

//8:25;27
export const getKeywordAutomation = async (automationId: string, dm: boolean) => {
    return await client.automation.findUnique({
        where: {
            id: automationId,
        },

        include: {
            dms: dm,
            trigger: {
                where: {
                    type: dm? 'DM' : 'COMMENT'
                },
            },
            listener: true,
            User: {
                select: {
                    subscription: {
                        select: {
                            plan: true,
                        },
                    },
                    Integrations: {
                        select: {
                            token: true,
                        },
                    },
                },
            },
        },
    })
}