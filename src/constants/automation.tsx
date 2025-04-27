//6:09:43

import { Bot, LucideInstagram, SendHorizonal } from "lucide-react"
import { v4 } from "uuid"

export type AutomationListenerProps = {
    id: string,
    label: string,
    icon: JSX.Element,
    description: string,
    type: 'SMARTAI' | 'MESSAGE'
}

export type AutomationTriggerProps = {
    id: string,
    label: string,
    icon: JSX.Element,
    description: string,
    type: 'COMMENT' | 'DM'
}



export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
    {
        id: v4(),
        label: 'Send the user a message',
        icon: <SendHorizonal />,
        description: 'Enter the message that you want to send the user',
        type: 'MESSAGE'
    },
    {
        id: v4(),
        label: 'Let SmartAI take over',
        icon: <Bot />,
        description: 'Tell AI about your project. (Upgrade to use this feature)',
        type: 'SMARTAI'
    }

]

//6:25:13
export const AUTOMATION_TRIGGERS: AutomationTriggerProps[] = [
    {
        id: v4(),
        label: 'User Comments on My Post',
        icon: <LucideInstagram />,
        description: 'Select if you want to automate comments on your post.',
        type: 'COMMENT'
    },
    {
        id: v4(),
        label: 'When the User Sends me a DM with a Keyword',
        icon: <LucideInstagram />,
        description: 'Select if you want to automate DMs on your profile',
        type: 'DM'
    }

]