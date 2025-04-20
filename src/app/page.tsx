import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/HeroSection";
import { Button } from "@/components/ui/button";
import { BarChart3, MessageCircle, Send} from "lucide-react";


export default function Home() {
  return (
    <main >
      <Header />
        <div className="flex-1">
          
          <HeroSection />

          <section className="py-12 md:py-20 bg-gray-50" id="features">
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful features for Instagram creators
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  Everything you need to boost engagement and save time managing your Instagram presence.
                </p>
              </div>

              <div className="relative">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="rounded-lg border bg-background p-6 shadow-sm relative">
                    <div className="text-pink-500 text-sm font-medium mb-2">Detect</div>
                    <h3 className="text-3xl font-bold mb-4">Keyword Triggers</h3>
                    <p className="text-muted-foreground mb-6">
                      Set up custom keywords that automatically trigger personalized DMs when detected in comments.
                    </p>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <MessageCircle className="h-6 w-6 text-pink-500" />
                    </div>
                    <div className="space-y-4 mt-6">
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Hashtag detection</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Phrase matching</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Custom triggers</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6">
                      Give it a try
                    </Button>

                    <div className="absolute -bottom-4 right-8 hidden md:block">
                      <div className="rounded-full bg-pink-500 px-3 py-1 text-xs text-white">
                        <span className="flex items-center gap-1">
                          <span>Jessica</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-background p-6 shadow-sm relative">
                    <div className="text-purple-500 text-sm font-medium mb-2">Automate</div>
                    <h3 className="text-3xl font-bold mb-4">DM Templates</h3>
                    <p className="text-muted-foreground mb-6">
                      Create and save multiple message templates for different keywords and campaigns.
                    </p>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Send className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="space-y-4 mt-6">
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Personalization</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Dynamic content</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Media attachments</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6">
                      Give it a try
                    </Button>

                    <div className="absolute -bottom-4 right-8 hidden md:block">
                      <div className="rounded-full bg-green-500 px-3 py-1 text-xs text-white">
                        <span className="flex items-center gap-1">
                          <span>Guest</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-background p-6 shadow-sm">
                    <div className="text-blue-500 text-sm font-medium mb-2">Analyze</div>
                    <h3 className="text-3xl font-bold mb-4">Performance</h3>
                    <p className="text-muted-foreground mb-6">
                      Track engagement metrics, conversion rates, and the performance of your automated DMs.
                    </p>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <BarChart3 className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="space-y-4 mt-6">
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Response rates</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">Conversion tracking</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-gray-50">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm font-medium">ROI measurement</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6">
                      Give it a try
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Schedule a demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      <Footer />
    </main>
  );
}
