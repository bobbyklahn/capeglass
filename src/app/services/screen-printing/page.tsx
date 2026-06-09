import ServiceDetail from '@/components/sections/ServiceDetail'

export const metadata = {
  title: 'Screen Printing on Glass | Cape Glass',
  description: 'Fired ceramic and organic inks printed directly onto wine bottles. Vivid, permanent multi-colour graphics from 500 units.',
}

export default function ScreenPrintingPage() {
  return (
    <ServiceDetail
      eyebrow="Service · Decoration"
      title="Screen printing"
      intro="Ceramic and organic inks printed onto the glass and fired so they bond to the surface. Sharp, vivid artwork that keeps its colour through filling, labelling and years of handling."
      image="/images/services/uv.png"
      imageAlt="Coloured artwork being screen printed onto wine bottles"
      benefits={[
        { title: 'Vivid colour', body: 'Full CMYK plus spot colours, matched to your brand and fired bright.' },
        { title: 'Permanent', body: 'Fired onto the glass rather than stuck on, so it will not lift or scuff.' },
        { title: 'Fine detail', body: 'Crisp logos, vintage text and scannable QR codes, even at small sizes.' },
        { title: 'Food-safe', body: 'Certified inks suitable for direct contact with the bottle and its contents.' },
      ]}
      specs={[
        { label: 'Minimum', value: '500 units' },
        { label: 'Lead time', value: '2-3 wks' },
        { label: 'Colours', value: 'CMYK + spot' },
        { label: 'Durability', value: '5+ years' },
        { label: 'Finish', value: 'Gloss or matte' },
        { label: 'Capacity', value: '187 ml - 1.5 L' },
      ]}
      applications={['Wine labels', 'Brand logos', 'Vintage detail', 'QR codes', 'Special editions']}
      ctaHeading="Colour that stays put."
    />
  )
}
