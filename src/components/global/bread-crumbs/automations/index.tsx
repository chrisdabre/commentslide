'use client'

import { Input } from '@/components/ui/input'
import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'
import { useQueryAutomation } from '@/hooks/user-queries'
import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutations-data'

type Props = {
  id: string
}

const AutomationBreadCrumb = ( {id}: Props) => {

    //to do get automation data 
    //5:04:00
    const { data } = useQueryAutomation(id)

    //the double click edit for the automations: 5:04:28
    const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id)

    const { latestVariable } = useMutationDataState(['update-automation'])
    
  return (
    <div className='rounded-full w-full p-5 flex items-center bg-[#1818181A]'>
        <div className='flex items-center gap-x-3 min-w-0'>
            <p className='text-[#9B9CA0] truncate'>
                Automations
            </p>
              <ChevronRight className='flex-shrink-0' color='#9B9CA0' />
              <span className='flex gap-x-3 items-center min-w-0'>
                {/* 3:21;30 */}
                {edit? (
                  <Input 
                  ref={inputRef} 
                  placeholder={isPending? latestVariable.variables: 'Add a new name'}
                  className='bg-transparent h-auto outline-none text-base border-none p-0'/>
                ) : (
                  <p className='text-[#9B9CA0] truncate'>
                    {latestVariable?.variables ? latestVariable?.variables.name : data?.data?.name}
                  </p>
                )}
                {/* 5:16:40 if you're editing, don't render the pencil icon */}
                {edit ? <></> : (
                <span 
                className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'
                onClick={enableEdit}>
                  <PencilIcon size={14} />
                </span>
                )}
              </span>
        </div>
        <div className='flex items-center ml-auto gap-x-5 truncate'>
              <p className='text-text-secondary/60 text-sm min-w-0 hidden md:block'>
                All updates are automatically saved
            </p>
            <div className='flex gap-x-5 flex-shrink-0'>
                <p className='text-text-secondary text-sm truncate min-w-0'>Changes Saved</p>
            </div>
        </div>
        <ActivateAutomationButton />
    </div>
  )
}

export default AutomationBreadCrumb