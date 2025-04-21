import { Button } from '@/components/ui/button'
import React from 'react'

const PaymentButton = () => {
    //Todo loading state
  return (
    <Button className="bg-gradient-to-r 
    from-[#CC3804] to-[#D064AC] hover:opacity-90 
    text-white font-bold rounded-xl">
      Upgrade
    </Button>
  )
}

export default PaymentButton