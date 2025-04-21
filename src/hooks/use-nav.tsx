'use client'

import { usePathname } from "next/navigation"

export const usePaths = () => {
    const pathName = usePathname()
    const path = pathName.split('/')
    let page = path[path.length -1 ]
    return {
        pathName,
        page
    }
}