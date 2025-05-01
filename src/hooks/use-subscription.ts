import { useState } from "react"
import { useMutationData } from "./use-mutations-data"
import axios from "axios"

//7:44:30
export const useSubscription = () => {
    const [isProcessing, setIsProcessing] = useState(false)

    const onSubscribe = async () => {
        try {
            setIsProcessing(true)
            const response = await axios.get('/api/payment')
            if(response.data.status === 200) {
                return (window.location.href = `${response.data.session_url}`)
            }
        } catch (error) {
            console.error('Failed to process subscription:', error)
        } finally {
            setIsProcessing(false)
        }
    }

    return {
        onSubscribe,
        isProcessing
    }
}

/* export const useSubscription = () => {

    const [isProcessing, setIsProcessing] = useState(false)

    const onSubscribe = async () => {
        
        setIsProcessing(true)

        const response = await axios.get('/api/payment')
        if(response.data.status === 200) {
            return (window.location.href = `${response.data.session_url}`)
        }

        setIsProcessing(false)
    }

    return {
        onSubscribe,
        isProcessing
    }
} */