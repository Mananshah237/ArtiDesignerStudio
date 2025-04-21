import Hero from "@/components/hero"
import About from "@/components/about"
import Creations from "@/components/creations"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import InstagramFeed from "@/components/instagram-feed"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Creations />
      <Services />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
