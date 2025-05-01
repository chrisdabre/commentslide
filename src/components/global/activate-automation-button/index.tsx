import { activateAutomation } from '@/actions/automations'
import { Button } from '@/components/ui/button'
import { useMutationData } from '@/hooks/use-mutations-data'
import { useQueryAutomation } from '@/hooks/user-queries'
import { Loader2, Radio } from 'lucide-react'
import React from 'react'

type Props = {
  id: string
}

const ActivateAutomationButton = ({id}: Props) => {
    /* to do setup optimiztic ui and fetch automation data */

  const {data} = useQueryAutomation(id)

  const useQueryAutomationData = typeof data?.data === 'object' ? data?.data : null

  const { mutate, isPending } = useMutationData(
    ['activate'],
  (data: { state: boolean }) => activateAutomation(id, data.state), 'automation-info' )


  
  return (
    <Button 
    disabled={isPending}
    onClick={() => mutate({state: !data?.data.active})}
    className='lg:px-10 mx-2 ml-4 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#CC3804] font-medium to-[#D064AC]'
    >
      {/* Only get the loader when isPendign is true */}
      { isPending && <Loader2 className='animate-spin'/>}
          <Radio />
          <p className='lg:inline hidden'>
            {useQueryAutomationData?.active ? 'Disable' : 'Activate'}
          </p>
        
      </Button>
  )
}

export default ActivateAutomationButton