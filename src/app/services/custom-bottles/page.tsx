import ServiceDetail from '@/components/sections/ServiceDetail'

export const metadata = {
  title: 'Custom Wine Bottles | Cape Glass',
  description: 'Your own bottle shape from a new mould, in runs from 500 to 100,000 units. Large formats to 30L, made in our own glassworks.',
}

export default function CustomBottlesPage() {
  return (
    <ServiceDetail
      eyebrow="Service · Glass"
      title="Custom bottles"
      intro="Your own shape, from a new mould, in runs most factories will not touch. Because we own the line, the minimum is 500 units rather than 50,000, and large formats are part of the same conversation."
      image="/images/services/large.png"
      imageAlt="A large-format custom wine bottle made by Cape Glass"
      benefits={[
        { title: 'Your shape', body: 'A new mould cut to your design, not a stock bottle with a different label.' },
        { title: 'Low minimum', body: 'Runs from 500 units, so a custom bottle is realistic for a boutique release.' },
        { title: 'Any size', body: 'From 187 ml splits through to 30L large formats for display and gifting.' },
        { title: 'One team', body: 'Design, tooling, glass and decoration handled under one roof.' },
      ]}
      specs={[
        { label: 'Run size', value: '500 - 100,000' },
        { label: 'Lead time', value: '6-10 wks' },
        { label: 'Tooling', value: 'Custom mould' },
        { label: 'Colours', value: 'Flint, antique, custom' },
        { label: 'Capacity', value: '187 ml - 30 L' },
        { label: 'Decoration', value: 'Emboss / print / decal' },
      ]}
      applications={['Boutique wineries', 'Limited releases', 'Signature ranges', 'Large formats', 'Corporate gifts']}
      ctaHeading="The bottle nobody else has."
    />
  )
}
