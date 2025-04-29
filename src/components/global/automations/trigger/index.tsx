'use client'

import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import ActiveTrigger from './active'
import { Separator } from '@/components/ui/separator'
import ThenAction from '../then/then-action'
import TriggerButton from '../trigger-button'
import { AUTOMATION_TRIGGERS } from '@/constants/automation'
import { useTriggers } from '@/hooks/use-automations'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Keywords from './keyword'

type Props = {
    id: string
}

const Trigger = ( {id}: Props) => {

  const { types, onSaveTrigger, onSetTrigger, isPending } = useTriggers(id)
  const { data } = useQueryAutomation(id)

  const triggerData = typeof data?.data === 'object' ? data.data : null
  
  if (triggerData && triggerData?.trigger.length > 0) {
    return (
      <div className='flex flex-col gap-y-6 items-center'>
        <ActiveTrigger 
        type={triggerData.trigger[0].type}
        keywords={triggerData.keywords}
        />
        {/* 6:23:27 */}
        {triggerData.trigger.length > 1 && 
          <>
            <div className='relative w-6/12 mt-4'>
              <p className='absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2'>
                or
              </p>
              <Separator orientation='horizontal' className='border-muted border-[1px]' />
            </div>
            <ActiveTrigger
            type={triggerData.trigger[1].type}
            keywords={triggerData.keywords}
            />
          </>
        }
        
        {!triggerData.listener && <ThenAction id={id} />} {/* 6:24:15 */}
      </div>
    )
 }
/* 6:24:31 */
 return <TriggerButton label='Add Trigger'>
  <div className='flex flex-col gap-y-2'>
    {AUTOMATION_TRIGGERS.map((trigger) => (
      <div 
      key={trigger.id} 
      onClick={() => onSetTrigger(trigger.type)} /* 6;35;05 */
      className={cn('hover:opacity-80 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2',
        !types?.find((t => t === trigger.type))
        ? 'bg-background-DB'
        : 'bg-gradient-to-br from-pink-700 font-medium to-pink-800'
      )}>
        <div className='flex gap-x-2 items-center'>
          {trigger.icon}
          <p className='font-bold'>{trigger.label}</p>
        </div>
        <p className='text-sm font-light'>{trigger.description}</p>
      </div>
    ))}
    <Keywords id={id}/>
    <Button 
    onClick={onSaveTrigger}
    disabled={types?.length === 0}
    className='bg-gradient-to-br from-pink-700 font-medium text-white to-pink-800 '>
      Create Trigger
    </Button>
  </div>
 </TriggerButton>
}

export default Trigger