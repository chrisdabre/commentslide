import { useListener } from '@/hooks/use-automations'
import React from 'react'
import TriggerButton from '../trigger-button'
import { AUTOMATION_LISTENERS } from '@/constants/automation'
import { SubscriptionPlan } from '../../subscription-plan'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader, Loader2 } from 'lucide-react'

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
        {/* This is a if else condition that renders components based on the plans */}
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
              <div
                  onClick={() => onSetListener(listener.type)}
                  key={listener.id} className={cn(Listener === listener.type ?
                      'bg-gradient-to-br from-pink-700 to-pink-800' :
                      'bg-background-DB', 'p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100')}>
                  <div className='flex gap-x-2 items-center'>
                      {listener.icon}
                      <p>{listener.label}</p>
                  </div>
                  <p>{listener.description}</p>
              </div>) } {/* 6:12:10 */}
              <form onSubmit={onFormSubmit} className='flex flex-col gap-y-2'>
                <Textarea placeholder={Listener === 'SMARTAI' ?
                    'Add a prompt that your Smart AI can use...' :
                    'Add a message you want to send to your customers'
                }
                {...register('prompt')} /* 6:20:57 */
                className='bg-background-DB outline-none border-none ring-0 focus:ring-0'
                />
                <Input 
                {...register('reply')} /* 6:21:25 */
                placeholder='Add a reply for comments (Optional)'
                className='bg-background-DB outline-none border-none ring-0 focus:ring-0'
                />
                <Button className='bg-gradient-to-br w-full from-pink-700 font-medium text-white to-pink-800'>
                    Add Listener
                </Button>
              </form>
    </div>
  </TriggerButton>
}

export default ThenAction