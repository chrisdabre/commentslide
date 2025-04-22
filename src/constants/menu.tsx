import { Activity, Contact, Home, Settings, SplinePointer } from 'lucide-react'
import { v4 as uuid } from 'uuid'

type FieldProps = {
    label: string
    id: string
}

export type SidebarProps = {
    icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU: SidebarProps[] = [
    {
        id: uuid(),
        label: "home",
        icon: <Home />
    },
    {
        id: uuid(),
        label: "automations",
        icon: <Activity />
    },
    {
        id: uuid(),
        label: "integrations",
        icon: <SplinePointer />
    },
    {
        id: uuid(),
        label: "settings",
        icon: <Settings />
    }

]