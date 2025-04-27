import { useListener } from '@/hooks/use-automations'
import React from 'react'
import TriggerButton from '../trigger-button'
import { AUTOMATION_LISTENERS } from '@/constants/automation'
import { SubscriptionPlan } from '../../subscription-plan'
import { cn } from '@/lib/utils'

type Props = {
    id: string
}

const ThenAction = ( { id }: Props) => {

    const {
        onSetListener,
        listener: Listener,
        onFormSubmit,
        register,
        isPending
    } = useListener(id)

  return <TriggerButton label='Then'>
    <div className='flex flex-col gap-y-2'>
          {AUTOMATION_LISTENERS.map((listener) => listener.type === 'SMARTAI' ? 
              <SubscriptionPlan key={listener.type} type='PRO'>
                <div 
                onClick={() => onSetListener(listener.type)} 
                key={listener.id} className={cn(Listener === listener.type ? 
                'bg-gradient-to-br from-pink-500 to bg-pink-800' : 
                'bg-background-DB', 'p-3 rounded-xl flex flex-col gap--2 cursor-pointer hover:opacity-80 transition duration-100')}>
                    <div className='flex gap-x-2 items-center'>
                        {listener.icon}
                        <p>{listener.label}</p>
                    </div>
                    <p>{listener.description}</p>
                </div>
              </SubscriptionPlan> : 
              '') } {/* 6:12:10 */}
    </div>
  </TriggerButton>
}

export default ThenAction