import { useListener } from '@/hooks/use-automations'
import React from 'react'
import TriggerButton from '../trigger-button'
import { AUTOMATION_LISTENERS } from '@/constants/automation'
import { SubscriptionPlan } from '../../subscription-plan'

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
              <SubscriptionPlan key={listener.type} type='PRO' /> : <SubscriptionPlan key={listener.type} type='FREE' />) } {/* 6:12:10 */}
    </div>
  </TriggerButton>
}

export default ThenAction