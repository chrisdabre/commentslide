'use client'

import { usePaths } from '@/hooks/use-nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'

type Props = {}

const AutomationList = (props: Props) => {
    //To doL get the automation list
  const { pathName } = usePaths()
  
    return (
    <div className='flex flex-col gap-y-3'>
        <Link href={`${pathName}/12345`} className='bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-[#545454]'>
            <div className='flex flex-col flex-1 items-start'>
                <h2 className='text-base font-semibold'>
                    Automation Name
                </h2>
                <p className='text-muted-foreground text-sm mb-2 mt-2'>
                    Trigger type
                </p>
                {/* To do: automation keywords */}
                {/* //We are rendeting colors and keyword background based on their keys */}
                <div className='flex gap-x-2 flex-wrap mt-3'>
                    <div className={cn('rounded-full px-4 py-1 capitalize', 
                        (0 + 1) % 1 == 0 && 'bg-keyword-green/15 border-2 border-keyword-green',
                        (1 + 1) % 1 == 0 && 'bg-keyword-purple/15 border-2 border-keyword-purple',
                        (2 + 1) % 1 == 0 && 'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                        (2 + 1) % 1 == 0 && 'bg-keyword-red/15 border-2 border-keyword-red'
                        )}>
                        getstarted
                    </div>
                </div>
                <div className='rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1'>
                    <p className='text-sm text-white'>
                        No Keywords
                    </p>
                </div>
            </div>
                <div className='flex flex-col justify-between'>
                    <p className='capatalize text-sm text-muted-foreground'>
                        April 22, 2025 WIP
                    </p>
                    <GradientButton type='BUTTON' className='w-full bg-background-BB text-white hover:bg-background-DB'>
                        SmartAI
                    </GradientButton>
                </div>
        </Link>
    </div>
  )
}

export default AutomationList