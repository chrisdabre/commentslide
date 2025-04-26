import { getAutomationInfo } from '@/actions/automations'
import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import { PrefetchUserAutomation } from '@/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { CircleAlert } from 'lucide-react'
import React from 'react'

type Props = {
  params: { id: string}
}


//to do set metadata stuff

export async function generateMetadata({ 
  params 
}: {
  params: { id: string }
}) {
  const info = await getAutomationInfo(params.id)
  return {
    title: info.data?.name,
  }
}

const page = async ( { params }: Props) => {
  
  const query = new QueryClient()
  await PrefetchUserAutomation(query, params.id)

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className='flex flex-col items-center gap-y-20'>
        <AutomationBreadCrumb id={params.id} />
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
          <div className='flex gap-2'>
            <CircleAlert color='red' />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default page