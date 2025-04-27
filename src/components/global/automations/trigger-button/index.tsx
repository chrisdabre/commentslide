import React from 'react'
import PopOver from '../../popover'
import { CirclePlus } from 'lucide-react'

type Props = {
    children: React.ReactNode,
    label: string
}

const TriggerButton = ( { children, label }: Props) => {
  return (
    <PopOver 
    className='w-[400px]' 
    trigger={ 
    <div className='border-2 border-dashed w-full border-pink-500 hover:opacity-80 
    cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5'>
        <CirclePlus strokeWidth={2.5} color='pink'/>
        <p className='text-pink-500 font-bold'>{label}</p>
    </div> }>

    {children}

    </PopOver>
  )
}

export default TriggerButton
