import { getKeywordAutomation, matchKeyword } from "@/actions/webhook/queries";
import { NextRequest, NextResponse } from "next/server";


//8:22:57 he says that there are additional things in the premium repo where they make the app prod ready

//8:13:23
//Method used to validate the webhook: Required by Instagram
export async function GET(req: NextRequest) {
    const hub = req.nextUrl.searchParams.get("hub.challenge");
    return new NextResponse(hub)
}

//Matches the keyword commented on the post with the one set in the automation
export async function POST(req: NextRequest) {
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
                        const direct_message = await sendDM()
                    }
                }
            }
        }

    } catch (error) {
        
    }
}