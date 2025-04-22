import React from 'react'
import { 
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
 } from '@clerk/nextjs'
 import { Loader2, Loader2Icon, LoaderIcon, User } from 'lucide-react'
 import Loader from '../loader'
import { Button } from '@/components/ui/button'

const ClerkAuthState = () => {
  return <>
    <ClerkLoading>
        <Loader2Icon className="animate-spin" />
    </ClerkLoading>
    <SignedOut>
        <SignInButton>
            <Button className='rounded-xl bg-[#252525] test-white hover:bg-[#252525]/70'>
                <User />
                Login
            </Button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
        <UserButton>
            <UserButton.UserProfileLink
                label='Dashboard'
                url='{`/dashboard}'
                labelIcon={<User size={16} />}
            />
        </UserButton>
    </SignedIn>
  </>
}

export default ClerkAuthState