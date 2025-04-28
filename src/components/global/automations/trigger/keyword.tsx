import { Input } from '@/components/ui/input'
import { useKeywords } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutations-data'
import { useQueryAutomation } from '@/hooks/user-queries'
import { X } from 'lucide-react'
import React from 'react'

type Props = {
    id: string
}

const Keywords = ( { id }: Props) => {
    const { keyword, onValueChange, onKeyPress, deleteMutation } = useKeywords(id)

    const { latestVariable } = useMutationDataState(['add-keyword']) 

    const { data } = useQueryAutomation(id)

  return (
    <div className='bg-background-DB flex flex-col gap-y-3 p-3 rounded-xl'>
        <p className='text-sm text-text-secondary'>
            Add words that trigger automation
        </p>
        <div className='flex flex-wrap justify-start gap-2 items-center'> {/* 6:49:15 */}
            {data?.data?.keywords && 
            data?.data?.keywords.length > 0 && 
            data?.data?.keywords.map((word) => word.id !== latestVariable.variables.id && (
                <div 
                key={word.id}
                className='bg-background-DB flex items-center gap-x-2 capitalize text-text-secondary py-1 rounded-full'>
                    <p>{word.word}</p>
                    <X size={20} onClick={() => deleteMutation( {id: word.id})}/>
                </div>
            )
            )}
            {/* 6;51;52 */}
            {latestVariable && latestVariable.status === 'pending' && (
                <div className='bg-background-DB flex items-center gap-x-2 capitalize text-text-secondary py-1 rounded-full'>
                    {latestVariable.variables.keyword}
                </div>
            )}
            <Input placeholder='Add keyword...' 
            style={{width: Math.min(Math.max(keyword.length || 10, 2), 50) + 'ch',}}
            value={keyword}
            className='p-0 bg-transparent ring-0 border-none outline-none'
            onChange={onValueChange}
            onKeyUp={onKeyPress}/>
        </div>
    </div>
  )
}

export default Keywords


//Optimistic UI for deletion 6:54:20 not done yet