import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProducts />
      <About />
      <Contact />
    </main>
  )
}
