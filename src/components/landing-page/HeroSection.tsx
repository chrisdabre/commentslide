import { BarChart3, Instagram, Send, User, Zap } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
      <section className="relative overflow-hidden py-20 md:py-10">
          <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="space-y-6">
                      <div className="inline-block rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-sm text-red-600 dark:text-red-400">
                          <span className="flex items-center gap-1">
                              <Instagram className="h-4 w-4" />
                              <span>Instagram Engagement Tool</span>
                          </span>
                      </div>
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                          Automate your Instagram DMs with keyword triggers
                      </h1>
                      <p className="text-muted-foreground text-lg dark:text-gray-400">
                          Boost engagement by automatically sending personalized DMs when fans comment with specific keywords.
                          Connect with your audience without the manual work.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                              size="lg"
                              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                          >
                              Get started
                          </Button>
                          <Button size="lg" variant="outline">
                              See how it works
                          </Button>
                      </div>
                      <div className="rounded-lg bg-background/50 px-4 py-2 text-sm">
                          <p className="flex items-center gap-2">
                              <span className="flex h-2 w-2 rounded-full bg-green-500" />
                              <span className="font-medium dark:text-gray-300">50+ creators are already using CommentSlide</span>
                          </p>
                      </div>
                  </div>
                  <div className="relative mx-auto lg:ml-auto">
                      <div className="relative rounded-xl border dark:border-gray-800 bg-background dark:bg-gray-900 shadow-xl">
                          <div className="p-4 border-b">
                              <div className="flex items-center gap-2">
                                  <div className="h-3 w-3 rounded-full bg-red-500" />
                                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                  <div className="h-3 w-3 rounded-full bg-green-500" />
                              </div>
                          </div>
                          <div className="p-6 space-y-6">
                              <div className="flex items-start gap-4">
                                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                      <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                  </div>
                                  <div className="flex-1 space-y-1">
                                      <p className="text-sm font-medium dark:text-gray-300">Comment detected</p>
                                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
                                          <p className="text-sm dark:text-gray-300">I want to learn more about your presets! #info</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="flex items-center gap-2">
                                  <Zap className="h-5 w-5 text-yellow-500" />
                                  <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                                      Keyword "#info" detected - sending DM...
                                  </p>
                              </div>

                              <div className="flex items-start gap-4">
                                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                                      <Send className="h-5 w-5 text-pink-500" />
                                  </div>
                                  <div className="flex-1 space-y-1">
                                      <p className="text-sm font-medium dark:text-gray-300">Auto DM sent</p>
                                      <div className="rounded-lg bg-pink-100 dark:bg-pink-900/30 p-3">
                                          <p className="text-sm dark:text-gray-300">
                                              Hey there! Thanks for your interest in my presets. Here's a link to my complete collection
                                              with 20% off: [link]. Let me know if you have any questions!
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="absolute -top-6 -right-6 hidden md:block">
                          <div className="rounded-full bg-pink-500 px-3 py-1 text-xs text-white">
                              <span className="flex items-center gap-1">
                                  <Zap className="h-3 w-3" />
                                  <span>Instant</span>
                              </span>
                          </div>
                      </div>

                      <div className="absolute -bottom-6 -left-6 hidden md:block">
                          <div className="rounded-full bg-purple-500 px-3 py-1 text-xs text-white">
                              <span className="flex items-center gap-1">
                                  <BarChart3 className="h-3 w-3" />
                                  <span>+40% Engagement</span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default HeroSection