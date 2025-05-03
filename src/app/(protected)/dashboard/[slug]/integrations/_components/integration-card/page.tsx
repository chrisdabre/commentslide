'use client'

import { onOAuthInstagram } from '@/actions/integrations'
import { onUserInfo } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ( { title, description, icon, strategy }: Props) => {

  const onInstaOAuth = () => onOAuthInstagram(strategy)

  //8:10:58
  const { data } = useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo,
  })

  //to find if we have an active integratiion 
  const integrated = data?.data?.Integrations.find(
    (integration) => integration.name === strategy
  )

  return (
      <div className='border-2 border-[#cc33ba] rounded-2xl gap-x-5 p-5 flex items-center justify-between'>
        {icon}
        <div>
            <h3 className='flex flex-col flex-1'>{title}</h3>
            <p className='text-muted-foreground text-base '>{description}</p>
        </div>

        <Button 
        onClick={onInstaOAuth}
        disabled={integrated?.name === strategy}
        className='bg-gradient-to-br text-white rounded-full text-lg from-pink-500 font-medium to-violet-500 hover:opacity-70 transition duration=180'
        >
            {integrated ? 'Connected' : 'Connect'}
        </Button>
      </div>
  )
}

export default IntegrationCard