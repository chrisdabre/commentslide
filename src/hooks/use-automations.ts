import { createAutomations } from "@/actions/automations"
import { useMutationData } from "./use-mutations-data"

//we're giving it the keys, 'create-automation', function, and querykey
export const useCreateAutomation = (id?: string) => {
    const { isPending, mutate } = useMutationData(
        ['create-automation'], 
        () => createAutomations(id),
        'user-automations'
    )

    return { isPending, mutate }
}