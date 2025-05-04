import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

type Props = {
    label: string,
    subLabel: string,
    description: string
}

//9:56:23
const DoubleGradientCard = ({description, label, subLabel}: Props) => {
  return (
    <div className='relative border-[1px] border-gray-700 p-5 rounded-xl flex flex-col gap-y-20 overflow-hidden'>
        <div className='flex flex-col z-40'>
            <h2 className='text-2xl font-medium'>{label}</h2>
            <p className='text-text-secondary text-sm'>{subLabel}</p>
        </div>
        <div className='flex justify-between items-center z-40 gap-x-10'>
            <p className='text-text-secondary text-sm'>{description}</p>
            <Button className='rounded-full bg-pink-500 w-10 h-19'>
                <ArrowRight color='white'/>
            </Button>
        </div>
        <div className='w-6/12 h-full absolute bg-gradient-to-b from-gray-900/50 via-purple-900/30 to-transparent opacity-20 -z-10' />
    </div>
  )
}

export default DoubleGradientCard