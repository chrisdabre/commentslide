'use client'

import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import { CircleAlert, Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    id: string
}


//7:27:31
const PostNode = ({id}: Props) => {

    const { data } = useQueryAutomation(id)
    
    //testing this to get rid of the typescript error. usually we just use data
    const automationData = typeof data?.data === 'object' ? data.data : null
    

  return (
      automationData && 
      automationData.posts.length > 0 && 
      <div className='w-10/12 lg:w-8/12 relative xl:w-4/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
        <div className='absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50'>
            <span className='h-[9px] bg-connector/10 rounded-full' />
            <Separator 
                orientation='vertical'
                className='bottom-full flex-1 border-[1px] border-connector/10'
            />
            <span className='h-[9px] w-[9px] bg-connector/10 rounded-full'/>
        </div>
        <div className='flex gap-x-2'>
            <CircleAlert color='pink'/>
            If they comment on...
        </div>
        <div className='bg-background-DB p-3 rounded-xl flex flex-col gap-y-2'>
            <div className='flex gap-x-2 items-center'>
                <Instagram color='pink'/>
                <p className='text-lg'>These Posts</p>
            </div>
            <div className='flex gap-x-2 flex-wrap mt-3'>
                {data.data.posts.map((post) => (
                    <div 
                    key={post.id} 
                    className='relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden'>
                        <Image 
                        fill 
                        sizes='100vw'
                        src={post.media}
                        alt='Instagram Posts'/>
                    </div>
                ))}
            </div>
        </div>
      </div>
  )
}

export default PostNode