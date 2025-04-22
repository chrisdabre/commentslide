import React from 'react'
import PaymentCard from './payment-card'

type Props = {}

const Billing = (props: Props) => {
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 conteiner lg:pt-3 xl:pt-3'>
        <PaymentCard current={'FREE'} label='FREE'/>
        <PaymentCard current={'FREE'} label='PRO' />
    </div>
  )
}

export default Billing