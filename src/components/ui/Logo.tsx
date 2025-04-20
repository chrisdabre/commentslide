import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <Link href={'/'}>
        <div className="flex items-center gap-2">
            <MessageCircle className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold">CommentSlide</span>
        </div>
    </Link>
  )
}

export default Logo