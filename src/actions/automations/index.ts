'use server'

import { currentUser } from "@clerk/nextjs/server"
import { onCurrentUser } from "../user"
import { createAutomation, findAutomation, getAutomations, updateAutomation } from "./queries"


//create a new automation
export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()

    try{

        const create = await createAutomation(user.id, id)

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
                status: 200,  // Typo here: 'stauts' instead of 'status'
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

export const getAutomationInfo = async (id: string) => {
    await onCurrentUser()

    try {
        const automation = await findAutomation(id)

        if (automation) return {
            status: 200,
            data: automation
        }
        return {
            status: 404,
            data: 'Oops! Something went wrong'
        }

    } catch (error) {
        return {
            status: 500,
            data: 'Internal Server Error'
        }
    }
}

export const updateAutomationName = async (
    automationId: string,
    data: {
        name?: string,
        active?: boolean,
        automation?: string
    }
) => {
    await onCurrentUser()

    try {
        const update = await updateAutomation(automationId, data)
        if(update) {
            return {
                status: 200,
                success: true,
                data: 'Automation Updated Successfully'
            }
        }
        return {
            status: 404,
            success: false,
            data: 'Oops! Could Not Find Automation'
        }
    } catch (error) {
        return {
            status: 500,
            success: false,
            data: 'Internal Server Error'
        }
    }
}