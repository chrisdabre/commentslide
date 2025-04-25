import { PAGE_ICON } from '@/constants/pages'
import React from 'react'

type Props = {
    page: string,
    slug?: string
}

const MainBreadCrumb = ( { page, slug }: Props) => {
  // Function to format the name with proper spacing
  const formatName = (name: string | undefined) => {
    if (!name) return '';
    // Split the name by any existing spaces or camelCase
    const parts = name.match(/[A-Z][a-z]+/g) || [name];
    return parts.join(' ');
  }

  return (
    <div className='flex flex-col items-start'>
        {page === 'Home' && (
        <div className='flex justify-center w-full'>
            <div className='radial--gradient py-5 lg:py-6 flex flex-col items-center'>
                <p className='text-text-secondary text-lg'>
                    Welcome Back,
                </p>
                <h2 className='capitalize text-4xl font-medium'>{formatName(slug)}</h2>
            </div>
        </div>
        )}

        <span className=' inline-flex py-5 lg:py-1 pr-16 gap-x-2 items-center lg:pt-10'>
            {PAGE_ICON[page.toUpperCase()]}
              <h2 className='capitalize text-2xl font-medium'>{page}</h2>
        </span>
    </div>
  )
}

export default MainBreadCrumb