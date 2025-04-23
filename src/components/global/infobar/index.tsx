'use client'

import { PAGE_BREAD_CRUMS } from '@/constants/pages'
import { usePaths } from '@/hooks/use-nav'
import { CircleHelpIcon, Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Logo from '@/components/ui/Logo'
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/Upgrade'
import CreateAutomation from '../create-automation'
import Search from '../search'
import Notifications from '../notifications-icon'
import MainBreadCrumb from '../bread-crumbs/MainBreadCrumb'

type Props = {
    slug: string
}

const Infobar = ({slug}: Props) => {
    const { page } = usePaths()
    /* 2:15:30 */
    const currentPage = PAGE_BREAD_CRUMS.includes(page) || 
    page == slug
  
    return (
        currentPage && (
            <div className='flex flex-col'>
                <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
                    <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                        <Sheet trigger={<Menu />} className='lg:hidden'>
                            <div className='flex flex-col h-full'>
                            <div className='flex gap-x-4 items-center p-6 justify-left'>
                                <Logo />
                            </div>
                            <div className='flex flex-col py-3'>
                                <Items page={page} slug={slug} />
                            </div>
                            <div className='px-20'>
                                <Separator orientation="horizontal" className='bg-[#4d4d4d]' />
                            </div>
                            <div className='pt-5 px-4 flex flex-col gap-y-6'>
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
                        </Sheet>
                    </span>
                    <Search />
                    <CreateAutomation />
                    <Notifications />
                </div>
                <MainBreadCrumb slug={slug} page={page === slug ? 'Home' : page} />
            </div>
        )
    )
}

export default Infobar