import DoubleGradientCard from '@/components/global/double-gradient-card'
import { DASHBOARD_CARDS } from '@/constants/dashboard'
import { BarChart2Icon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 conteiner lg:pt-3'>
      {/* 9:55:57 */}
      <div className='flex gap-5 lg:flex-row flex-col'>
        {
          DASHBOARD_CARDS.map((card) => (
            <DoubleGradientCard key={card.id} {...card}/>
          ))
        }
      </div>
      <div className='border-[1px] relative border-gray-700 p-5 rounded-xl'>
        <span className='flex gap-x-2 z-50 items-center'>
          <BarChart2Icon color='pink'/>
          <div className='z-50'>
            <h2 className='text-2xl font-medium text-white'>
              Automated Activity
            </h2>
            <p className='text-text-secondary text-sm'>
              Automated 0 out of 1 interactions
            </p>
          </div>
        </span>
      </div>
    </div>
  )
}

export default page