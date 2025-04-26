import { createAutomations, updateAutomationName } from "@/actions/automations"
import { useMutationData } from "./use-mutations-data"
import { useEffect, useRef, useState } from "react"

//we're giving it the keys, 'create-automation', function, and querykey
export const useCreateAutomation = (id?: string) => {
    const { isPending, mutate } = useMutationData(
        ['create-automation'], 
        () => createAutomations(id),
        'user-automations'
    )

    return { isPending, mutate }
}

//5:06:00
export const useEditAutomation = (automationId: string) => {
    const [edit, setEdit] = useState(false)

    const inputRef = useRef<HTMLInputElement | null>(null)

    const enableEdit = () => setEdit(true)
    const disableEdit = () => setEdit(false)

    const {isPending, mutate} = useMutationData(
        ['update-automation'],
        (data: { name: string }) => updateAutomationName(automationId, {name: data.name}),
        'automation-info',
        disableEdit
    )

    useEffect(() => {
        //we listen when the user clicks outside of the component
        function handleClickOutside(this: Document, event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node | null)) {
                if (inputRef.current.value !== "") {
                    mutate({ name: inputRef.current.value })
                } else {
                    disableEdit()
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return {
        edit,
        enableEdit,
        disableEdit,
        inputRef,
        isPending
    }
}