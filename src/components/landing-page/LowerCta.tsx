import React from 'react'
import { Button } from '../ui/button'

const LowerCta = () => {
  return (
      <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-500">
          <div className="container px-4 md:px-6 text-center">
              <div className="mx-auto max-w-[800px] space-y-6 text-white">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Ready to boost your Instagram engagement?
                  </h2>
                  <p className="text-lg opacity-90">
                      Join thousands of creators who are saving time and connecting with their audience more effectively.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button size="lg" variant="secondary">
                          Start your free trial
                      </Button>
                      <Button size="lg" variant="outline" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                          Schedule a demo
                      </Button>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default LowerCta