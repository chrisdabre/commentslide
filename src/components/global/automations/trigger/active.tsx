import { InstagramIcon, SendHorizonal } from 'lucide-react'
import React from 'react'

type Props = {
    type: string
    keywords: {
        id: string,
        word: string,
        automationId: string | null
    } []
}

const ActiveTrigger = ( { keywords, type }: Props) => {
  return (
    <div className='bg-background-DB p-3 rounded-xl w-full'>
        <div className='flex gap-2 items-center'>
            {type === 'COMMENT' ? <InstagramIcon color='pink' /> : <SendHorizonal color='pink'/>}
            <p className='text-lg'> {type === 'COMMENT' ? 'User Comments on my post' : 'Sends me a Direct Message'} </p>
        </div>
        <p className='text-text-secondary mt-2'>
            {type === 'COMMENT' ? 'If the user comments on a video/post that is setup to listen for keywords, this automation will fire' 
            : 'If the user sends you a message that contains a keywords, this automation will fire'}
        </p>
        <div className='flex gap-2 mt-5 flex-wrap'>
            {keywords.map((word) => 
            <div key={word.id} className='bg-gradient-to-br from-[#cc338c] to-[#701c5f] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full'>
                <p>
                    {word.word}
                </p>
            </div>
        )}
        </div>
    </div>
  )
}

export default ActiveTrigger