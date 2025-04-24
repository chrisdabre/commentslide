import { onboardUser } from '@/actions/user'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

  const user = await onboardUser();


  return (
    <div>Dashboard</div>
  )
}

export default page