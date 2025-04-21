'use client'

import Logo from '@/components/ui/Logo'
import { usePaths } from '@/hooks/use-nav'
import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import { CircleHelpIcon } from 'lucide-react'
import ClerkAuthState from '../clerk-auth-state'
import { Button } from "@/components/ui/button"
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './Upgrade'
import PaymentButton from '../payment-button'


type Props = {
  slug: string,
}

const Sidebar = ({slug}: Props) => {
  const { page } = usePaths()

  return (
    <div className='w-[250px] border-[1px] radial fixed left-0 lg:inline-block 
    border-[#545454] dark:border-[#545454]
    bg-gradient-to-b 
    hidden
    dark:from-[#768BDD] dark:via-[#171717] dark:to-[#768BDD]
    from-[#E8EFFF] via-white to-[#E8EFFF]
    bottom-0 top-0 m-3 rounded-3xl overflow-hidden'>
      
      <div className='flex flex-col gap-y-5 w-full h-full p-3 
      dark:bg-[#171717] bg-white bg-opacity-90 bg-clip-padding
      backdrop-filter backdrop-blur-3xl back backdrop--blur__safari'>
        
        <div className='flex gap-x-2 items-center p-5 justify-center'>
          <Logo />
          </div>
          
          <div className='flex flex-col py-3'>
            <Items page={page} slug={slug}/>
        </div>
        <div className='px-16'>
          <Separator orientation="horizontal" className='bg-[#4d4d4d]' />
        </div>
        <div className='px-3 flex flex-col gap-y-5'>
          <Button 
            variant="ghost" 
            className='flex gap-x-2 items-center justify-start w-full p-0'
            onClick={() => {
              const clerkButton = document.querySelector('[data-clerk-button]');
              if (clerkButton instanceof HTMLElement) {
                clerkButton.click();
              }
            }}
          >
            <ClerkAuthState />
            <p className='text-[#9B9CA0]'>Profile</p>
          </Button>
          <div className='flex gap-x-3'>
            <CircleHelpIcon />
            <p className='text-[#9B9CA0]'>Help</p>
          </div>
        </div>
        <SubscriptionPlan type='FREE'>
          <div className='flex flex-1 flex-col justify-end'>
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  )
}

export default Sidebar