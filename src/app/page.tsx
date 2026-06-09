import Hero from '@/components/sections/Hero'
import ProofBar from '@/components/sections/ProofBar'
import About from '@/components/sections/About'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <About />
      <FeaturedProducts />
      <Services />
      <Contact />
    </>
  )
}
