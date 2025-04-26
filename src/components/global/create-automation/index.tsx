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

  //Get the id of the newly created automation and store it in mutationId so we can store it in the db
  //we use memo so that we can store the variable and not keep refreshing evetytime
  const mutationId = useMemo(() => v4, []) //this will never refresh unless the dependency array [] changes

  /* @ts-ignore */
  const { isPending, mutate } = useCreateAutomation()
    return (
        <Button className='lg:px-10 py-6 hover:opacity-80 text-white rounded-xl bg-gradient-to-br
             from-[#CC3804]
             font-medium
             to-[#D064AC]' onClick={() => mutate({name: 'Untitled', id: v4(), createdAt: new Date() })}>
              {/* 4:39:58 */}
            <Loader state={isPending} className="">
                <Activity />
                <p className='lg:inline hidden'>Create Automation</p>
            </Loader>
        </Button>
  )
}

export default CreateAutomation