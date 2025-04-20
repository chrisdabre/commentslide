import React from 'react'

const HowItWorks = () => {
  return (
      <section className="py-12 md:py-20" id="how-it-works">
          <div className="container px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How CommentDM works</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                      Three simple steps to automate your Instagram engagement
                  </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                          <span className="text-2xl font-bold text-pink-500">1</span>
                      </div>
                      <h3 className="text-xl font-bold">Connect your Instagram</h3>
                      <p className="text-muted-foreground">
                          Link your Instagram account securely to our platform in just a few clicks.
                      </p>
                  </div>

                  <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                          <span className="text-2xl font-bold text-purple-500">2</span>
                      </div>
                      <h3 className="text-xl font-bold">Set up keyword triggers</h3>
                      <p className="text-muted-foreground">
                          Define which keywords or hashtags should trigger an automatic DM response.
                      </p>
                  </div>

                  <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                          <span className="text-2xl font-bold text-blue-500">3</span>
                      </div>
                      <h3 className="text-xl font-bold">Create your DM templates</h3>
                      <p className="text-muted-foreground">
                          Design personalized message templates that will be sent automatically.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default HowItWorks