import { Input } from '@/components/ui/input'
import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'

type Props = {}

const AutomationBreadCrumb = (props: Props) => {

    //to do get automation data
    //
  return (
    <div className='rounded-full w-full p-5 flex items-center bg-[#1818181A]'>
        <div className='flex items-center gap-x-3 min-w-0'>
            <p className='text-[#9B9CA0] truncate'>
                Automations
            </p>
              <ChevronRight className='flex-shrink-0' color='#9B9CA0' />
              <span className='flex gap-x-3 items-center min-w-0'>
                {/* 3:21;30 */}
                {/* to do Show editing data */}
                <p className='text-[#9B9CA0] truncate'>This is the automation title</p>
                <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'>
                    <PencilIcon size={14}/>
                </span>
              </span>
        </div>
        <div className='flex items-center ml-auto gap-x-5'>
              <p className='text-text-secondary/60 text-sm truncate min-w-0 hidden md:block'>
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