import Sidebar from '@/components/global/sidebar'
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
        <Sidebar />
    </div>
  )
}

export default Layout