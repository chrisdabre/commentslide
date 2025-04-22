import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ( { title, description, icon, strategy }: Props) => {
  return (
      <div className='border-2 border-[#cc33ba] rounded-2xl gap-x-5 p-5 flex items-center justify-between'>
        {icon}
        <div>
            <h3 className='flex flex-col flex-1'>{title}</h3>
            <p className='text-muted-foreground text-base '>{description}</p>
        </div>

        <Button 
        //onClick={onInstaOAuth}
        //disabled={integrated?.name === strategy}
        className='bg-gradient-to-br text-white rounded-full text-lg from-pink-500 font-medium to-violet-500 hover:opacity-70 transition duration=180'
        >
            Connect
            {/* {integrated ? 'Connected' : 'Connect'} */}
        </Button>
      </div>
  )
}

export default IntegrationCard