import ServiceDetail from '@/components/sections/ServiceDetail'

export const metadata = {
  title: 'Glass Embossing | Cape Glass',
  description: 'Raised and recessed detail moulded straight into the wine bottle. Permanent, tactile branding from 1,000 units. Custom moulds available.',
}

export default function EmbossingPage() {
  return (
    <ServiceDetail
      eyebrow="Service · Decoration"
      title="Glass embossing"
      intro="Raised and recessed detail moulded straight into the bottle during forming. It survives ice buckets, dishwashers and years on a shelf, because it is the glass itself, not a layer stuck on top."
      image="/images/services/embossing2.png"
      imageAlt="Embossed lettering raised directly into a glass wine bottle"
      benefits={[
        { title: 'Permanent', body: 'Moulded into the glass during forming, so it never peels, scratches off or fades.' },
        { title: 'Tactile', body: 'A raised, weighty feel in the hand that quietly signals a premium product.' },
        { title: 'Recognisable', body: 'A distinct silhouette and crest that stands out in a row of printed labels.' },
        { title: 'Any design', body: 'From a simple monogram to a full crest, logo or decorative border.' },
      ]}
      specs={[
        { label: 'Minimum', value: '1,000 units' },
        { label: 'Lead time', value: 'Mould 4-6 wks' },
        { label: 'Depth', value: '0.5-2.0 mm' },
        { label: 'Tolerance', value: '±0.1 mm' },
        { label: 'Colours', value: 'Flint, antique, clear' },
        { label: 'Capacity', value: '187 ml - 1.5 L' },
      ]}
      applications={['Premium wine', 'Craft spirits', 'Estate signatures', 'Commemorative editions', 'Corporate gifts']}
      ctaHeading="Built for bottles that get remembered."
    />
  )
}
