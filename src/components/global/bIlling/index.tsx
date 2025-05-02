'use client'

import React from 'react'
import PaymentCard from './payment-card'
import { useQueryUser } from '@/hooks/user-queries'

type Props = {}

const Billing = (props: Props) => {

  const { data } = useQueryUser()

  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container lg:pt-3 xl:pt-3'>
        <PaymentCard current={data?.data?.subscription?.plan!} label='PRO'/>
        <PaymentCard current={data?.data?.subscription?.plan!} label='FREE' />
    </div>
  )
}

export default Billing