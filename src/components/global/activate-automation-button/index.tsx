import { Button } from '@/components/ui/button'
import { Loader2, Radio } from 'lucide-react'
import React from 'react'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
    /* to do setup optimiztic ui and fetch automation data */
  return (
    <Button className='lg:px-10 mx-2 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#CC3804] font-medium to-[#D064AC]'>
        
          <Radio />
          <p className='lg:inline hidden'>
            Activate
          </p>
        
      </Button>
  )
}

export default ActivateAutomationButton