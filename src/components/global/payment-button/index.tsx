'use client'

import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/use-subscription'
import { CreditCardIcon, Loader2 } from 'lucide-react'
import React from 'react'

const PaymentButton = () => {
  
  const { onSubscribe, isProcessing } = useSubscription()

  return (
    <Button 
    disabled={isProcessing}
    onClick={onSubscribe}
    className="bg-gradient-to-r 
    from-[#CC3804] to-[#D064AC] hover:opacity-90 
    text-white font-bold rounded-xl">

      {isProcessing ? <Loader2 className='animate-spin' /> : <CreditCardIcon />}
      Upgrade
    </Button>
  )
}

export default PaymentButton