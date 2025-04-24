import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import { CircleAlert } from 'lucide-react'
import React from 'react'

type Props = {
  params: { id: string}
}

//to do set metadata stuff

const page = ( { params }: Props) => {
  //To do: prefetch user automation data 
  return (
    <div className='flex flex-col items-center gap-y-20'>
      <AutomationBreadCrumb id={params.id}/>
      <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
        <div className='flex gap-2'>
          <CircleAlert color='red'/>
          When...
        </div>
        <Trigger id={params.id} />
      </div>
    </div>
  )
}

export default page