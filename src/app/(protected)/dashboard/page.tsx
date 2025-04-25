import { onboardUser } from '@/actions/user'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

  const user = await onboardUser();

  //If a user is created or there's an existing user, redirect to dashboard with their first and last name
  if (user.status === 200 || user.status === 201) {
    return redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}`)
  }

  return (
    redirect('/sign-in')
  )
}

export default Page