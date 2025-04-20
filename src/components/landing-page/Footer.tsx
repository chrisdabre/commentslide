import { Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <footer className="border-t bg-background">
          <div className="container px-4 md:px-6 py-10">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                      <div className="flex items-center gap-2 mb-4">
                          <MessageCircle className="h-6 w-6 text-pink-500" />
                          <span className="text-lg font-bold">CommentDM</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                          Automate your Instagram DMs with keyword triggers and boost engagement with your audience.
                      </p>
                      <div className="flex gap-4">
                          <Link href="#" className="text-muted-foreground hover:text-foreground">
                              <Instagram className="h-5 w-5" />
                              <span className="sr-only">Instagram</span>
                          </Link>
                          <Link href="#" className="text-muted-foreground hover:text-foreground">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                              <span className="sr-only">Twitter</span>
                          </Link>
                      </div>
                  </div>

                  <div>
                      <h3 className="text-sm font-medium mb-4">Product</h3>
                      <ul className="space-y-2 text-sm">
                          <li>
                              <Link href="#features" className="text-muted-foreground hover:text-foreground">
                                  Features
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Pricing
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Testimonials
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  FAQ
                              </Link>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="text-sm font-medium mb-4">Resources</h3>
                      <ul className="space-y-2 text-sm">
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Blog
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Guides
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Support
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  API
                              </Link>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="text-sm font-medium mb-4">Company</h3>
                      <ul className="space-y-2 text-sm">
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  About
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Careers
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Privacy Policy
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="text-muted-foreground hover:text-foreground">
                                  Terms of Service
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                  <p>© {new Date().getFullYear()} CommentSlide. All rights reserved.</p>
              </div>
          </div>
      </footer>
  )
}

export default Footer