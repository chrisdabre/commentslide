import { findAutomation } from "@/actions/automations/queries";
import { createChatHistory, getChatHistory, getKeywordAutomation, getKeywordPost, matchKeyword, trackResponses } from "@/actions/webhook/queries";
import { sendDM } from "@/lib/fetch";
import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();
//8:22:57 he says that there are additional things in the premium repo where they make the app prod ready

//8:13:23
//Method used to validate the webhook: Required by Instagram
export async function GET(req: NextRequest) {
    const hub = req.nextUrl.searchParams.get("hub.challenge");
    return new NextResponse(hub)
}

//Matches the keyword commented on the post with the one set in the automation
export async function POST(req: NextRequest) {
    //getting the request payload
    const webhook_payload = await req.json()
    let matcher 
    
    try {
        //for messages
        if(webhook_payload.entry[0].messaging){
            matcher = await matchKeyword(webhook_payload.entry[0].messaging[0].message.text)
        }
        //for comments
        if(webhook_payload.entry[0].changes){
            matcher = await matchKeyword(webhook_payload.entry[0].changes[0].value.text)
        }

        if(matcher && matcher.automationId){
            //we have the keyword match
            //check if it's a comment or message

            if(webhook_payload.entry[0].messaging){

                const automation = await getKeywordAutomation(matcher.automationId, true)
                
                //if we have the automation. fire the automation. we have 2 paths, direct message and Smart AI
                if(automation && automation.trigger){
                    if(automation.listener && automation.listener.listener === 'MESSAGE'){
                        const direct_message = await sendDM(
                            webhook_payload.entry[0].id, 
                            webhook_payload.entry[0].messaging[0].sender.id,
                            automation.listener?.prompt,
                            automation.User?.Integrations[0].token!,
                        )

                        //11:06:04 we also need to check a bunch of conditions like if a user is a first time or a returning and if they're using a different post later
                        if(direct_message.status === 200) {
                            const tracked = await trackResponses(automation.id, 'DM')

                            if(tracked){
                                return NextResponse.json(
                                    {
                                        message: 'Message Send',
                                    },
                                    {
                                        status: 200
                                    },
                                )
                            }
                        }
                    }
                    //smart ai path only if the user has a pro plan
                    if(automation.listener && automation.listener.listener === 'SMARTAI' && automation.User?.subscription?.plan === 'PRO') {
                        //8:39:58
                        const smart_ai_message = await openai.chat.completions.create({
                            model: 'gpt-4o',
                            messages: [
                                {
                                    role: 'assistant',
                                    content: `${automation.listener?.prompt}: Keep responses under 2 sentences`
                                },
                            ],
                        })

                        //8:39:58
                        if(smart_ai_message.choices[0].message.content) {
                            const receiver = createChatHistory(
                                automation.id,
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                webhook_payload.entry[0].messaging[0].message.text
                            )

                            const sender = createChatHistory(
                                automation.id,
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                smart_ai_message.choices[0].message.content
                            )

                            //we create a transaction if the client flow fails. but we still have to send messages
                            //8:42:22
                            await client.$transaction([receiver, sender])

                            //sending the actual DM
                            const direct_message = await sendDM(
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                smart_ai_message.choices[0].message.content,
                                automation.User?.Integrations[0].token!
                            )

                            if (direct_message.status === 200) {
                                const tracked = await trackResponses(automation.id, 'DM')

                                if (tracked) {
                                    return NextResponse.json(
                                        {
                                            message: 'Message send',
                                        },
                                        {
                                            status: 200
                                        }
                                    )
                                }
                            }
                        }
                    }
                }
            }
            //8:46:43 Checks if the sent payload is a comments type payload
            if (
                webhook_payload.entry[0].changes &&
                webhook_payload.entry[0].changes[0].field === 'comments'
            ) {
                const automation = await getKeywordAutomation(
                    matcher.automationId,
                    false
                )

                const automations_post = await getKeywordPost(
                    webhook_payload.entry[0].changes[0].value.media.id,
                    automation?.id!
                )

                //8:49:50
                //check if the post has the automation and the keyword matches
                if (automation && automations_post && automation.trigger) {
                    if(automation.listener) {
                        if (automation.listener.listener === 'MESSAGE') {
                            const direct_message = await sendDM(
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].changes[0].value.from.id,
                                automation.listener?.prompt,
                                automation.User?.Integrations[0].token!
                            )
                            if (direct_message.status === 200) {
                                const tracked = await trackResponses(automation.id, 'COMMENT')

                                if (tracked) {
                                    return NextResponse.json(
                                        {
                                            message: 'Message sent',
                                        },
                                        { status: 200 }
                                    )
                                }
                            }
                        }
                        //if the user has smart ai 8:51:15
                        if(automation.listener.listener === 'SMARTAI' && automation.User?.subscription?.plan === 'PRO') {
                            const smart_ai_message = await openai.chat.completions.create({
                                model: 'gpt-4o',
                                messages: [
                                    {
                                        role: 'assistant',
                                        content: `${automation.listener?.prompt}: Keep the responses under 2 sentences`
                                    }
                                ]
                            })
                            if (smart_ai_message.choices[0].message.content) {
                                //the reason why we don't have await is because we're creating a transaction
                                //8:52:40
                                const receiver = createChatHistory(
                                    automation.id,
                                    webhook_payload.entry[0].id,
                                    webhook_payload.entry[0].changes[0].value.from.id,
                                    webhook_payload.entry[0].changes[0].value.text
                                )

                                const sender = createChatHistory(
                                    automation.id,
                                    webhook_payload.entry[0].id,
                                    webhook_payload.entry[0].changes[0].value.from.id,
                                    smart_ai_message.choices[0].message.content
                                )

                                await client.$transaction([receiver, sender])

                                const direct_message = await sendDM(
                                    webhook_payload.entry[0].id,
                                    webhook_payload.entry[0].changes[0].value.from.id,
                                    smart_ai_message.choices[0].message.content,
                                    automation.User?.Integrations[0].token!
                                )

                                if(direct_message.status === 200) {
                                    const tracked = await trackResponses(automation.id, 'COMMENT')

                                    if (tracked) {
                                        return NextResponse.json(
                                            {
                                                message: 'Message sent'
                                            },
                                            {
                                                status: 200
                                            }
                                        )
                                    }
                                } 
                            }
                        }
                    }
                }
            }
        }

        //this means that there was no keyword mathc
        //so we can check if they're an existing customer that has an ongoing conversation
        //8:54:37
        if (!matcher) {
            //check if the user has chat history
            const customer_history = await getChatHistory(
                webhook_payload.entry[0].messaging[0].recipient.id,
                webhook_payload.entry[0].messaging[0].sender.id
            )
            
            //we only save conversations where smart ai is used
            if (customer_history.history.length > 0) {
                const automation = await findAutomation(customer_history.automationId!)

                if(automation?.listener?.listener === 'SMARTAI' && automation?.User?.subscription?.plan === 'PRO') {
                    const smart_ai_message = await openai.chat.completions.create({
                        model: 'gpt-4o',
                        messages: [
                            {
                                role: 'assistant',
                                content: `${automation.listener?.prompt}: keep responses under 2 sentences`,
                            },
                            ...customer_history.history,
                            {
                                role: 'user',
                                content: webhook_payload.entry[0].messaging[0].message.text,
                            },
                        ],
                    })

                    if (smart_ai_message.choices[0].message.content) {
                        const receiver = createChatHistory(
                            automation.id,
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            webhook_payload.entry[0].messaging[0].message.text
                        )

                        const sender = createChatHistory(
                            automation.id,
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            smart_ai_message.choices[0].message.content
                        )

                        await client.$transaction([receiver, sender])

                        const direct_message = await sendDM(
                            webhook_payload.entry[0].id,
                            webhook_payload.entry[0].messaging[0].sender.id,
                            smart_ai_message.choices[0].message.content,
                            automation.User?.Integrations[0].token!
                        )

                        if (direct_message.status === 200) {
                            return NextResponse.json(
                                {
                                    message: 'Message send',
                                },
                                { status: 200 },
                            )
                        }
                    }
                }
            }

            return NextResponse.json(
                {
                    message: 'No automation set',
                },
                { status: 404 }
            )
        }

        return NextResponse.json(
            {
                message: 'No automation set',
            },
            {
                status: 404
            },
        )

    } catch (error) {
        return NextResponse.json(
            {
                message: 'No automation set',
            },
            { status: 500 }
        )
    }
}