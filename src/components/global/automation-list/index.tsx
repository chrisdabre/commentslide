'use client'

import { usePaths } from '@/hooks/use-nav'
import { cn, getMonth } from '@/lib/utils'
import Link from 'next/link'
import React, { useMemo } from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { useQueryAutomations } from '@/hooks/user-queries'
import CreateAutomation from '../create-automation'
import { useMutationData, useMutationDataState } from '@/hooks/use-mutations-data'

type Props = {}

interface Automation {
    id: string;
    name: string;
    createdAt: Date;
    active: boolean;
    trigger: Trigger[];
    listener: {
        id: string;
        listener: string;
        automationId: string;
        prompt: string;
        commentReply: string | null;
        dmCount: number;
        commentCount: number;
    } | null;
    posts: Post[];
    dms: Dms[];
    User?: User;
    userId: string | null;
    keywords: Keyword[];
}

// You can define these interfaces based on your needs
interface Trigger {
    id: string;
    // Add other trigger properties
}

interface Post {
    id: string;
    // Add other post properties
}

interface Dms {
    id: string;
    // Add other DMs properties
}

interface Keyword {
    id: string;
    // Add other keyword properties
}

interface User {
    id: string;
    // Add other user properties
}

interface AutomationResponse {
    status: number;
    data: Automation[];
}

const AutomationList = (props: Props) => {

    //Getting the automation data from the cached data
    const { data } = useQueryAutomations()
    //const { data }: { data?: AutomationResponse } = useQueryAutomations()
    console.log(data)
    //4:36:40
    const { latestVariable } = useMutationDataState(['create-automation'])
    console.log(latestVariable)

    const { pathName } = usePaths()

    if (data?.status !== 200 || data.data.length <= 0) {
        return (
            <div className='h-[70vh] justify-center items-center flex flex-col gap-y-3 p-6'>
                <h3 className='text-lg text-gray-400 mb-4'>
                    No Automations Created. Create Automations to get Started.
                </h3>
                <CreateAutomation />
            </div>
        )
    }
    //4:49:25
    const optimisticData = useMemo(() => {
        if (latestVariable?.variables) {
            const test = [latestVariable.variables, ...data.data]

            return { data: test }
        }
        return data
    }, [latestVariable, data])

    return (
        <div className='flex flex-col gap-y-3'>

            {optimisticData.data!.map((automation: Automation) => (
                <Link 
                    key={automation.id}
                    href={`${pathName}/${automation.id}`} 
                    className='bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-[#545454]'
                >
                    <div className='flex flex-col flex-1 items-start'>
                        <h2 className='text-base font-semibold'>
                            {automation.name}
                        </h2>
                        <p className='text-muted-foreground text-sm mb-2 mt-2'>
                            TO DO: Add a property
                        </p>
                        {/* If there are automations return the keywords else return no keywords */}
                        {automation.keywords.length > 0 ? (
                            <div className='flex gap-x-2 flex-wrap mt-3'>
                                {automation.keywords.map((keyword, key) => 

                                    <div key={keyword.id} className={cn('rounded-full px-4 py-1 capitalize',
                                        (0 + 1) % 1 == 0 && 'bg-keyword-green/15 border-2 border-keyword-green',
                                        (1 + 1) % 1 == 0 && 'bg-keyword-purple/15 border-2 border-keyword-purple',
                                        (2 + 1) % 1 == 0 && 'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                                        (3 + 1) % 1 == 0 && 'bg-keyword-red/15 border-2 border-keyword-red'
                                    )}>
                                        {keyword.word}
                                    </div>
                                )}

                        </div>
                        ) : (
                                <div className='rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1'>
                                    <p className='text-sm text-white'>
                                        No Keywords
                                    </p>
                                </div>
                        )}
                        
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='capitalize text-sm text-muted-foreground'>
                           {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
                           {automation.createdAt.getUTCDate()}
                           {(automation.createdAt.getUTCDate() % 10 === 1 && automation.createdAt.getUTCDate() !== 11) ? 'st'
                           : (automation.createdAt.getUTCDate() % 10 === 2 && automation.createdAt.getUTCDate() !== 12) ? 'nd'
                           : (automation.createdAt.getUTCDate() % 10 === 3 && automation.createdAt.getUTCDate() !== 13) ? 'rd'
                           : 'th'}{' '}
                           {automation.createdAt.getFullYear()}
                        </p>
                        {/* If it is not SmartAI return the standard button */}
                        {automation.listener?.listener === 'SMARTAI' ? (
                            <GradientButton type='BUTTON' className='w-full bg-background-BB text-white hover:bg-background-DB'>
                                SmartAI
                            </GradientButton>
                        ) : (
                            <Button className='bg-background-DB hover:bg-background-DB text-white'>
                                Standard
                            </Button>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AutomationList