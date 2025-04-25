import { createAutomations } from "@/actions/automations"
import { useMutationData } from "./use-mutaations-data"

//we're giving it the keys, 'create-automation', function, and querykey
export const useCreateAutomation = async () => {
    const { isPending, mutate } = useMutationData(
        ['create-automation'], 
        () => createAutomations(),
        'user-automations'
    )

    return { isPending, mutate }
}