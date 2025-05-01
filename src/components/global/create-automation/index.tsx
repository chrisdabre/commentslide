'use client'

import { Button } from '@/components/ui/button'
import { Activity, Loader2 } from 'lucide-react'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'


type Props = {}

const CreateAutomation = (props: Props) => {
  //Todo: Create the automation in db using mutate

  //create a random id for automations
  //Get the id of the newly created automation and store it in mutationId so we can store it in the db
  //we use memo so that we can store the variable and not keep refreshing evetytime
  const mutationId = useMemo(() => v4(), []) //this will never refresh unless the dependency array [] changes

  console.log(mutationId)


  const { isPending, mutate } = useCreateAutomation(mutationId)
  


    return (
        <Button className='lg:px-10 py-6 hover:opacity-80 text-white rounded-xl bg-gradient-to-br
             from-[#CC3804]
             font-medium
             to-[#D064AC]' onClick={() => mutate({
              name: 'Untitled', 
              id: mutationId, 
              createdAt: new Date(), 
              keywords: [] })}>
              {/* 4:39:58 */}
              {isPending && <Loader2 className='animate-spin'/>}
                <Activity />
                <p className='lg:inline hidden'>Create Automation</p>
        </Button>
  )
}

export default CreateAutomation