"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                    <Link href="#features" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                        How It Works
                    </Link>
                    <Link href="#pricing" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                        Pricing
                    </Link>
                    <Link href="#testimonials" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                        Contact
                    </Link>
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                        <Link href="/login" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                            Log in
                        </Link>
                        <Button className="mt-2 w-full" onClick={() => setOpen(false)}>
                            Start for free
                        </Button>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
