import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
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
    </div>
  )
}

export default page