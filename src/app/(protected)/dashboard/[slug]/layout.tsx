import CreateAutomation from '@/components/global/create-automation'
import Infobar from '@/components/global/infobar'
import Sidebar from '@/components/global/sidebar'
import { Search } from 'lucide-react'
import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { PrefetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch'

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

//Getting the url params 
const Layout = async ({children, params}: Props) => {
  
    //Query client library to cache data
    //WIP: Query client fetch data

    //React query to prefetch data from different server actions
    const query = new QueryClient()

    await PrefetchUserProfile(query)

    await PrefetchUserAutomations(query)
  
    return (
    <HydrationBoundary state={ dehydrate(query) }>
        <div className='p-3'>
            {/* Sidebar */}
            <Sidebar slug={params.slug} />
            {/* Infobar */}
            <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
                <Infobar slug={params.slug} />
                {children}
            </div>
        </div>
    </HydrationBoundary>
  )
}

export default Layout