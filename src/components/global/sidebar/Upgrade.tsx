import React from 'react'
import PaymentButton from '../payment-button'

const UpgradeCard = () => {
  return (
    <div className='bg-gray-100 dark:bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3'>
        <span className='text-gray-900 dark:text-white text-sm'>
            Upgrade to
            <span className='bg-gradient-to-r
             from-[#CC3804]
             font-bold
             to-[#D064AC] 
             bg-clip-text 
             text-transparent p-1'>
                 Smart AI
             </span>
        </span>
          <p className='text-gray-600 dark:text-[#9B9CA0] font-light text-sm'>
              Unlock all features including AI and more.
          </p>
          <PaymentButton />
    </div>
  )
}

export default UpgradeCard