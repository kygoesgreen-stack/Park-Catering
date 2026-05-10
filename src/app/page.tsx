import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Services } from '@/components/Services'
import { Menu } from '@/components/Menu'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Services />
      <Menu />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}