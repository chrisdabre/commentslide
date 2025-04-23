import React from 'react'

type Props = {
    children: React.ReactNode
    type: 'BUTTON' | 'LINK'
    href?: string
    className?: string
}

const GradientButton = ({ children, type, href, className }: Props) => {
  const gradients = 'bg-gradient-to-r from-indigo-500 via-purple-500 to pink-500 rounded-xl p-[2px]'
    return (
    <div>index</div>
  )
}

export default GradientButton