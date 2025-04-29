'use client'

import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import { Bot, CircleAlert, CircleDotDashed, SendHorizonal } from 'lucide-react'
import React from 'react'
import PostButton from '../post'
import { Prisma, Trigger } from '@/generated/prisma'

type Props = {
    id: string
}

//6:58:10
const ThenNode = ( { id }: Props) => {
    const { data } = useQueryAutomation(id)
    //TO do: add the 
    const automationData = typeof data?.data === 'object' ? data.data : null
    
    //Previous code
    //const commentTrigger = data?.data?.trigger.find((t) => t.type === 'COMMENT')
    const commentTrigger = automationData?.trigger.find((t) => t.type === 'COMMENT')

    //return !data?.data?.listener ? (
    return !automationData?.listener ? (
    <></>
) : (
        <div className='w-full lg:w-10/12 relative xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
            <div className='absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50'>
                <span className='h-[9px] w-[9px] bg-connector/10 rounded-full' />
                <Separator orientation='vertical' className='bottom-full flex-1 border-[1px] border-connector/10' />
                <span className='h-[9px] w-[9px] bg-connector/10 rounded-full'/>
            </div>
            <div className='flex gap-x-2'>
                <CircleAlert color='red'/>
                Then...
            </div>
            <div className='bg-background-DB p-3 rounded-xl flex flex-col gap-y-2'>
                <div className='flex gap-x-2 items-center'>
                    {automationData?.listener.listener === 'MESSAGE' ? ( 
                        <SendHorizonal color='pink'/> 
                        ): (
                        <Bot />
                        )}
                        <p className='text-lg'>
                            {automationData.listener.listener === 'MESSAGE' ? 'Send the user a message' : 'Let Smart AI take over'}
                        </p>
                </div>
                    <p className='text-text-secondary'>{automationData.listener.prompt}</p>
            </div>
            {data.data.posts.length > 0 ?( <></>) : (commentTrigger) ? ( <PostButton id={id}/> ) : (<></>)}
        </div>
    ) 
}

export default ThenNode



/* 
'use client'

import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import { Bot, CircleAlert, SendHorizonal } from 'lucide-react'
import React from 'react'
import PostButton from '../post'

type Props = {
    id: string
}

const ThenNode = ({ id }: Props) => {
    const { data } = useQueryAutomation(id)
    const automationData = typeof data?.data === 'object' ? data.data : null

    const commentTrigger = automationData?.trigger?.find((t) => t.type === 'COMMENT')

    return !automationData?.listener ? (
        <></>
    ) : (
        <div className='w-full lg:w-10/12 relative xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
            <div className='absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50'>
                <span className='h-[9px] w-[9px] bg-connector/10 rounded-full' />
                <Separator orientation='vertical' className='bottom-full flex-1 border-[1px] border-connector/10' />
                <span className='h-[9px] w-[9px] bg-connector/10 rounded-full'/>
            </div>
            <div className='flex gap-x-2'>
                <CircleAlert color='red'/>
                Then...
            </div>
            <div className='bg-background-DB p-3 rounded-xl flex flex-col gap-y-2'>
                <div className='flex gap-x-2 items-center'>
                    {automationData.listener.listener === 'MESSAGE' ? ( 
                        <SendHorizonal color='pink'/> 
                    ) : (
                        <Bot />
                    )}
                    <p className='text-lg'>
                        {automationData.listener.listener === 'MESSAGE' ? 'Send the user a message' : 'Let Smart AI take over'}
                    </p>
                </div>
                <p className='text-text-secondary'>{automationData.listener?.prompt}</p>
            </div>
            {automationData.posts.length > 0 ? (
                <></>
            ) : commentTrigger ? (
                <PostButton />
            ) : (
                <></>
            )}
        </div>
    )
}

export default ThenNode 
*/