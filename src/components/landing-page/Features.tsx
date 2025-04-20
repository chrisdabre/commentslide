import React from 'react'
import { Button } from '../ui/button'
import { BarChart3, MessageCircle, Send } from 'lucide-react'

const Features = () => {
  return (
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900" id="features">
          <div className="container px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-100">
                      Powerful features for Instagram creators
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-400 text-lg">
                      Everything you need to boost engagement and save time managing your Instagram presence.
                  </p>
              </div>

              <div className="relative">
                  <div className="grid gap-8 md:grid-cols-3">
                      <div className="rounded-lg border dark:border-gray-800 bg-background dark:bg-gray-800 p-6 shadow-sm relative">
                          <div className="text-pink-500 dark:text-pink-400 text-sm font-medium mb-2">Detect</div>
                          <h3 className="text-3xl font-bold mb-4 dark:text-gray-100">Keyword Triggers</h3>
                          <p className="text-muted-foreground dark:text-gray-400 mb-6">
                              Set up custom keywords that automatically trigger personalized DMs when detected in comments.
                          </p>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                              <MessageCircle className="h-6 w-6 text-pink-500 dark:text-pink-400" />
                          </div>
                          <div className="space-y-4 mt-6">
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium dark:text-gray-300">Hashtag detection</span>
                                  </div>
                              </div>
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Phrase matching</span>
                                  </div>
                              </div>
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Custom triggers</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="rounded-lg border dark:border-gray-800 bg-background dark:bg-gray-800 p-6 shadow-sm relative">
                          <div className="text-purple-500 dark:text-purple-400 text-sm font-medium mb-2">Automate</div>
                          <h3 className="text-3xl font-bold mb-4 dark:text-gray-100">DM Templates</h3>
                          <p className="text-muted-foreground dark:text-gray-400 mb-6">
                              Create and save multiple message templates for different keywords and campaigns.
                          </p>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                              <Send className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                          </div>
                          <div className="space-y-4 mt-6">
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Personalization</span>
                                  </div>
                              </div>
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Dynamic content</span>
                                  </div>
                              </div>
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Media attachments</span>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="rounded-lg border dark:border-gray-800 bg-background dark:bg-gray-800 p-6 shadow-sm">
                          <div className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-2">Analyze</div>
                          <h3 className="text-3xl font-bold mb-4 dark:text-gray-100">Performance</h3>
                          <p className="text-muted-foreground dark:text-gray-400 mb-6">
                              Track engagement metrics, conversion rates, and the performance of your automated DMs.
                          </p>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                              <BarChart3 className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                          </div>
                          <div className="space-y-4 mt-6">
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Response rates</span>
                                  </div>
                              </div>
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">Conversion tracking</span>
                                  </div>
                              </div>
                              <div className="rounded-lg border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                      <span className="text-sm font-medium">ROI measurement</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Features