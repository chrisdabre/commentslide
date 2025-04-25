import { createAutomations } from "@/actions/automations"
import { useMutationData } from "./use-mutaations-data"

export const useCreateAutomation = async () => {
    const { isPending, mutate } = useMutationData(
        ['create-automation'], 
        () => createAutomations(),
        'user-automations'
    )

    return { isPending, mutate }
}