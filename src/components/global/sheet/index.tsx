import { Sheet as SHadcnSheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

type Props = {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
}

const Sheet = ({ trigger, children, className }: Props) => {
  return (
    <SHadcnSheet>
        <SheetTrigger className={className}>
            {trigger}
        </SheetTrigger>
        <SheetContent side="left">
           {children}
        </SheetContent>
    </SHadcnSheet>
  )
}

export default Sheet