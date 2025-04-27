'use client'

import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import ActiveTrigger from './active'
import { Separator } from '@/components/ui/separator'
import ThenAction from '../then/then-action'
import TriggerButton from '../trigger-button'
import { AUTOMATION_TRIGGERS } from '@/constants/automation'

type Props = {
    id: string
}

const Trigger = ( {id}: Props) => {

  const {} = useTriggers(id)
  const { data } = useQueryAutomation(id)
  
  if(data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className='flex flex-col gap-y-6 items-center'>
        <ActiveTrigger 
        type={data.data.trigger[0].type}
        keywords={data.data.keywords}
        />
        {/* 6:23:27 */}
        {data?.data.trigger.length > 1 && 
          <>
            <div className='relative w-6/12 mt-4'>
              <p className='absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2'>
                or
              </p>
              <Separator orientation='horizontal' className='border-muted border-[1px]' />
            </div>
            <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            />
          </>
        }
        
        {!data?.data.listener && <ThenAction id={id} />} {/* 6:24:15 */}
      </div>
    )
 }
/* 6:24:31 */
 return <TriggerButton label='Add Trigger'>
  <div className='flex flex-col gap-y-2'>
    {AUTOMATION_TRIGGERS.map((trigger) => (
      <div key={trigger.id} onClick={() => onSetTrigger(trigger.type)}>
        d
      </div>
    ))}
  </div>
 </TriggerButton>
}

export default Trigger