import React from 'react'

type Props = {
    state: boolean
    className: string
    children: React.ReactNode
    color?: string
}

const Loader = (props: Props) => {
  if (!props.state) {
    return <>{props.children}</>
  }

  return (
    <div className="relative">
      <div className={`opacity-40 ${props.className}`}>
        {props.children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="animate-spin rounded-full h-8 w-8 border-4" 
          style={{ 
            borderTopColor: props.color || '#3B82F6',
            borderRightColor: 'transparent',
            borderBottomColor: props.color || '#3B82F6',
            borderLeftColor: 'transparent'
          }}
        />
      </div>
    </div>
  )
}

export default Loader