import CreateAutomation from '@/components/global/create-automation'
import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import { Search } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

//Getting the url params 
const Layout = ({children, params}: Props) => {
  
    //Query client library to cache data
    //WIP: Query client fetch data
  
    return (
    <div className='p-3'>
        {/* Sidebar */}
        <Sidebar slug={params.slug}/>
        {/* Navbar */}
        <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
            <Navbar slug={params.slug}/>
        </div>
    </div>
  )
}

export default Layout