import { InstagramIcon, TwitchIcon } from "lucide-react";

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description: 'Connect your Instagram Account to get started',
        icon: <InstagramIcon />,
        strategy: 'INSTAGRAM'
    },
    {
        title: 'Connect Salesforce',
        description: 'Connect your Salesforce Account to get started',
        icon: <TwitchIcon />,
        strategy: 'CRM'
    }
]