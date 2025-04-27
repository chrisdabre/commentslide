import { duplicatevalidation } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialStateTriggerProps ={
    trigger?: {
        type?: 'COMMENT' | "DM"
        keyword?: string,
        types?: string[],
        keywords?: string[]
    }
}

//default data for the initial state 5:27:11
const InitialState: InitialStateTriggerProps={
    trigger: {
        type: undefined,
        keyword: undefined,
        types: [],
        keywords: [],
    },
}

//5:27:44
export const AUTOMATION = createSlice({
    name: 'automation',
    initialState: InitialState,
    reducers: {
        TRIGGER: (state, action: PayloadAction<InitialStateTriggerProps>) => {
            state.trigger!.types = duplicatevalidation(
                state.trigger?.types!,
                action.payload.trigger?.type!
            )
            return
        },
    },
})

//5:29;40
export const {TRIGGER} = AUTOMATION.actions
export default AUTOMATION.reducer