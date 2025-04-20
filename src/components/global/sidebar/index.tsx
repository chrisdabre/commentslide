'use client'

import Logo from '@/components/ui/Logo'
import { usePaths } from '@/hooks/use-nav'
import React from 'react'

type Props = {
  slug: string
}

const Sidebar = ({slug}: Props) => {
  const { page } = usePaths()

  return (
    <div className='w-[250px] border-2 radial fixed left-0 lg:inline-block 
    border-[#545454] dark:border-[#545454] border-gray-200
    bg-gradient-to-b 
    dark:from-[#768BDD] dark:via-[#171717] dark:to-[#768BDD]
    from-[#E8EFFF] via-white to-[#E8EFFF]
    bottom-0 top-0 m-3 rounded-3xl overflow-hidden'>
      
      <div className='flex flex-col gap-y-5 w-full h-full p-3 
      dark:bg-[#171717] bg-white bg-opacity-90 bg-clip-padding
      backdrop-filter backdrop-blur-3xl back backdrop--blur__safari'>
        <div className='flex gap-x-2 items-center p-5 justify-center'>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Sidebar