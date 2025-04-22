import { Button } from '@/components/ui/button'
import { Activity, Loader2 } from 'lucide-react'
import React from 'react'
import Loader from '../loader'

type Props = {}

const CreateAutomation = (props: Props) => {
  //Todo: Create the automation in db using mutate
    return (
        <Button className='lg:px-10 py-6 hover:opacity-80 text-white rounded-xl bg-gradient-to-br
             from-[#CC3804]
             font-medium
             to-[#D064AC]'>
            <Loader state={false} className="">
                <Activity />
                <p className='lg:inline hidden'>Create Automation</p>
            </Loader>
        </Button>
  )
}

export default CreateAutomation