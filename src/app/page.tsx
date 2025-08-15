import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ValuePropositions from '@/components/sections/ValuePropositions';
import Services from '@/components/sections/Services';
import QuoteForm from '@/components/sections/QuoteForm';

export default function HomePage() {
  return (
    <div className="pt-20"> {/* Account for fixed header */}
      <Hero />
      <FeaturedProducts />
      <ValuePropositions />
      <Services />
      <QuoteForm />
    </div>
  );
}