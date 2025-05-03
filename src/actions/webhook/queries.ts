
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