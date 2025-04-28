'use server'

import { client } from "@/lib/prisma"
import { list } from "postcss"

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


export const findAutomation = async (id: string) => {
    return await client.automation.findUnique({
        where: {
            id,
        },
        include: {
            keywords: true,
            trigger: true,
            posts: true,
            listener: true,
            User: {
                select: {
                    subscription: true,
                    Integrations: true
                },
            },
        },
    })
}

//Used for updating the name of the automation
//we use the where param so that it only updates the table of the specified id
export const updateAutomation = async (
    id: string,
    update: {
        name?: string,
        active?: boolean
    }
) => {
    return await client.automation.update({
        where: { id },
        data: {
            name: update.name,
            active: update.active
        },
    })
}


export const addListener = async (
    automationId: string,
    listener: 'SMARTAI' | 'MESSAGE',
    prompt: string,
    reply?: string
) => {

    return await client.automation.update({
        where: {
            id: automationId,
        },
        data: {
            listener: {
                create: {
                    listener,
                    prompt,
                    commentReply: reply,
                },
            },
        },
    })
}


//6;31;04
export const addTrigger = async (automationId: string, trigger: string[]) => {
    if(trigger.length === 2) {
        return await client.automation.update({
            where: {id: automationId},
            data: {
                trigger: {
                    createMany: {
                        data: [{type: trigger[0]} , {type: trigger[1] }],
                    },
                },
            },
        })
    }
    return await client.automation.update({
        where: {
            id: automationId,
        },
        data: {
            trigger: {
                create: {
                    type: trigger[0],
                },
            },
        },
    })
}

//6:41;15
export const addKeyword = async (automationId: string, keyword: string) => {
    return client.automation.update({
        where: {
            id: automationId,
        },
        data: {
            keywords: {
                create: {
                    word: keyword,
                },
            },
        },
    })
}


//6;45;14

export const deleteKeywordQuery = async (id: string) => {
    return client.keyword.delete({
        where: { id },
    })
}

//7:18:55
export const addPost = async (
    automationId: string,
    posts: {
        postid: string,
        caption?: string,
        media: string,
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
    }
) => {
    return await client.automation.update({
        where: {
            id: automationId,
        },
        data: {
            posts: {
                createMany: {
                    data: posts,
                },
            },
        },
    })
}