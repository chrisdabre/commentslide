import { Contact2Icon } from "lucide-react"
import { Activity, Home, Settings, SplinePointer } from 'lucide-react'

export const PAGE_BREAD_CRUMS: string [] = [
    'contacts',
    'automations',
    'integrations',
    'settings'
]

type Props = {
    [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <Activity />,
    CONTACTS: <Contact2Icon />,
    INTEGRATIONS: <SplinePointer />,
    SETTINGS: <Settings />,
    HOME: <Home />
}