import { useQueryUser } from "@/hooks/user-queries"

type Props = {
    children: React.ReactNode,
    type: 'FREE' | 'PRO'
}

export const SubscriptionPlan = ({children, type}: Props) => {
    const { data } = useQueryUser()

    return data?.data?.subscription?.plan === type && children
}