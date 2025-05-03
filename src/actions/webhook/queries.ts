
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

//8:25;27 FOr a specific automation we're etting some values 8:47:46
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

//8:33:16
export const trackResponses = async (automationId: string, type: 'COMMENT' | 'DM') => {
    if(type==='COMMENT'){
        return await client.listener.update({
            where: { automationId },
            data: {
                commentCount: {
                    increment: 1,
                },
            },
        })
    }

    if(type==='DM'){
        return await client.listener.update({
            where: {automationId},
            data: {
                dmCount: {
                    increment: 1,
                },
            },
        })
    }
}

//8:40:59
export const createChatHistory = (automationId: string, sender: string, receiver: string, message: string) => {
    return client.automation.update({
        where: {
            id: automationId,
        },
        data: {
            dms: {
                create: {
                    receiver,
                    senderId: sender,
                    message
                },
            },
        },
    })
}

//8:49:00
//we find the post from the post table
//where it is of the postid and it has the same automationid
//select automationid and set it to trye
export const getKeywordPost = async (postId: string, automationId: string) => {
    return await client.post.findFirst({
        where: {
            AND: [{ postId: postId }, {automationId}],
        },
        select: { automationId: true }
    })
}


//THIS NEEDS TO BE LOOKED INTO
export const getChatHistory = async (recipientId: string, senderId: string) => {
    const chats = await client.automation.findFirst({
        where: {
            dms: {
                some: {
                    AND: [
                        { receiver: senderId },
                        { senderId: recipientId }
                    ]
                }
            }
        },
        select: {
            id: true,
            dms: {
                select: {
                    message: true,
                    createdAt: true,
                    senderId: true,
                    receiver: true
                },
                orderBy: {
                    createdAt: 'asc'
                }
            }
        }
    });

    // Format the chat history for OpenAI conversation
    const history = chats?.dms.map(chat => ({
        role: chat.senderId === recipientId ? 'assistant' : 'user',
        content: chat.message
    })) ?? [];

    return {
        automationId: chats?.id,
        history
    };
}