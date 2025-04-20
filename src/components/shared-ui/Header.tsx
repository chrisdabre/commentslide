import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Logo from '../ui/Logo'
import { MobileNav } from '../landing-page/MobileNav'

const NavItems = () => {
    return <>
        <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
        </Link>
        <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
        </Link>
        <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
        </Link>
    </>
}

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6 ">
                <NavItems />
            </nav>
            <div className="flex items-center gap-5">
                <Link href="/sign-in" className="hidden md:block text-sm font-medium hover:text-primary">
                    Log in
                </Link>
                <Link href='/sign-up'>
                    <Button>Sign Up</Button>
                </Link>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header