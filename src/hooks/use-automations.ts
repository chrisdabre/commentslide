import { createAutomations, saveListener, saveTrigger, updateAutomationName } from "@/actions/automations"
import { useMutationData } from "./use-mutations-data"
import { useEffect, useRef, useState } from "react"
import { z } from 'zod'
import useZodForm from "./use-zod-form"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { TRIGGER } from "@/redux/slices/automation"

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

//5:53:55
export const useListener = (id: string) => {
    const [listener, setListener] = useState<'MESSAGE' | 'SMARTAI' | null>(null)

    const promptSchema = z.object({
        prompt: z.string().min(1),
        reply: z.string(),
    })

    const { isPending, mutate } = useMutationData(['create-listener'], (data: {prompt: string, reply: string}) => 
        saveListener(id, listener || 'MESSAGE' /* 6:19:28 */, data.prompt, data.reply), 'automation-info')

    const { errors, onFormSubmit, register, reset, watch } = useZodForm(promptSchema, mutate)

    const onSetListener = (type: 'SMARTAI' | 'MESSAGE') => setListener(type)

    return {
        onFormSubmit,
        onSetListener,
        register,
        listener,
        isPending,
    }
}

//6:27:59
export const useTriggers = (id: string) => {
    const types = useAppSelector((state) => state.AutomationReducer.trigger?.types)

    const dispatch: AppDispatch = useDispatch()

    const onSetTrigger = ((type: 'COMMENT' | 'DM') => dispatch(TRIGGER({trigger:{ type }})))

    const { isPending, mutate} = useMutationData(
        ['add-trigger'], 
        (data: {types: string[]}) => saveTrigger(id, data.types),
        'automation-info'
    )

    const onSaveTrigger = () => mutate({ types })

    return {
        types,
        onSetTrigger,
        onSaveTrigger,
        isPending
    }
}