import { useQueryAutomationPosts } from '@/hooks/user-queries'
import React from 'react'

type Props = {
    id: string
}

const PostButton = ({id}: Props) => {

    const {data} = useQueryAutomationPosts()

    const {} = useAutomationPosts(id)
    
    return (
        <div>PostButton</div>
    )
}

export default PostButton