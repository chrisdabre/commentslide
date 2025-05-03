
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


//NEEDS to be looked into
// New function to get chat history
export const getChatHistory = async (senderid: string, reveiver: string) => {
    const messages = await client.dms.findMany({
        where: {
            senderId: senderid, 
            receiver: reveiver,
        },
        orderBy: {
            createdAt: 'asc',
        },
        select: {
            message: true,
            id: true,
            senderId: true, // Include senderId to potentially infer role later if needed
            automationId: true,
        },
    });

    if (!messages || messages.length === 0) {
        return { history: [], automationId: null };
    }

    // Assuming sequential storage: User message first, then Assistant reply.
    // This might be inaccurate if multiple messages of one type arrive consecutively.
    const history = messages.map((msg, index) => ({
        role: index % 2 === 0 ? ('user' as const) : ('assistant' as const), // Assign roles based on order
        content: msg.message || '',
    }));

    // Return the formatted history and the automationId from the first message
    return {
        history: history,
        automationId: messages[0].automationId,
    };
}


