import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
    page: string,
    slug: string
}

const Items = ({ page, slug }: Props) => {
  return (
    SIDEBAR_MENU.map((item) => (
        <Link 
        key={item.id} 
        href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`}
        className={cn(
            'capitalize flex gap-x-2 rounded-full p-3 transition-colors',
            'dark:hover:bg-neutral-800 hover:bg-neutral-100',
            page === item.label && 'dark:bg-neutral-800 dark:border dark:border-neutral-700 bg-neutral-200',
            page === slug && item.label === 'home' 
                ? 'dark:bg-neutral-800 dark:border dark:border-neutral-700 bg-neutral-200' 
                : 'dark:text-[#9B9CA0] text-neutral-600'
        )}>
            {item.icon}
            {item.label}
        </Link>
    ))
  )
}

export default Items