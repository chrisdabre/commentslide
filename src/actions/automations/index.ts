'use server'

import { currentUser } from "@clerk/nextjs/server"
import { onCurrentUser } from "../user"
import { createAutomation, getAutomations } from "./queries"


//create a new automation
export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()

    try{

        const create = await createAutomation(user.id)

        if(create) return {
            status: 200,
            success: true,
            data: 'Automation Created'
        }

        return {
            status: 404,
            success: false,
            data: 'Oops! Somathing went wrong'
        }

    }catch (error) {
        return {
            status: 500,
            success: false,
            data: 'Internal Server Error'
        }
    }
}

//get all the existing automations
export const getAllAutomations = async () => {
    const user = await onCurrentUser()

    try {
        const automations = await getAutomations(user.id)

        if (automations) {
            return {
                stauts: 200,
                data: automations.automations
            }
        }
        return {
            status: 404,
            data: []
        }
    } catch (error) {
        return {
            status: 500,
            data: 'Internal Server Error'
        }
    }
}