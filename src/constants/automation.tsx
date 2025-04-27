//6:09:43

import { Bot, SendHorizonal } from "lucide-react"
import { v4 } from "uuid"

export type AutomationListenerProps = {
    id: string,
    label: string,
    icon: JSX.Element,
    description: string,
    type: 'SMARTAI' | 'MESSAGE'
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