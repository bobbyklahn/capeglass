import ServiceDetail from '@/components/sections/ServiceDetail'

export const metadata = {
  title: 'Decals & Heat Transfer | Cape Glass',
  description: 'Fine multi-colour transfer graphics for wine bottles, with strong adhesion and crisp registration. From 500 units.',
}

export default function DecalApplicationPage() {
  return (
    <ServiceDetail
      eyebrow="Service · Decoration"
      title="Decals & heat transfer"
      intro="Fine, multi-colour graphics applied as a transfer, for detail that screen printing alone cannot reach. Strong adhesion and clean registration, with removable or permanent options."
      image="/images/services/premium bottle.jpg"
      imageAlt="A decorated premium wine bottle finished with a transfer graphic"
      benefits={[
        { title: 'Fine detail', body: 'Near-photographic artwork, gradients and fine line work reproduce cleanly.' },
        { title: 'Crisp registration', body: 'Multiple colours line up precisely, even on curved bottle surfaces.' },
        { title: 'Weatherproof', body: 'Resists moisture and temperature swings through transport and chilling.' },
        { title: 'Flexible', body: 'Choose removable or permanent, in custom shapes and sizes.' },
      ]}
      specs={[
        { label: 'Minimum', value: '500 units' },
        { label: 'Lead time', value: '1-2 wks' },
        { label: 'Materials', value: 'Vinyl, polyester, film' },
        { label: 'Temp range', value: '-40 to +80 °C' },
        { label: 'Finish', value: 'Gloss or matte' },
        { label: 'Capacity', value: '187 ml - 1.5 L' },
      ]}
      applications={['Seasonal editions', 'Event bottles', 'Distributor branding', 'Compliance labels', 'Authentication marks']}
      ctaHeading="Detail without the limits of print."
    />
  )
}
