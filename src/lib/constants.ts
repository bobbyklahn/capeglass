import { BottleModel, Service, ValueProposition } from '@/types';

export const BOTTLE_MODELS: BottleModel[] = [
  {
    id: '0425',
    name: 'Model 0425',
    image: '/images/BOTTLES/0425@300x.png',
    capacity: '750ml',
    specs: 'Premium Glass • Multiple Colors',
    startingPrice: '$2.50',
    description: 'Classic wine bottle design with elegant proportions, perfect for premium wine brands.',
  },
  {
    id: 'bk88',
    name: 'Model BK88',
    image: '/images/BOTTLES/BK88@300x.png',
    capacity: '750ml',
    specs: 'Premium Glass • Multiple Colors',
    startingPrice: '$2.25',
    description: 'Modern bottle design with distinctive shape, ideal for contemporary wine labels.',
  },
  {
    id: 'bordelaise',
    name: 'Bordelaise',
    image: '/images/BOTTLES/BORDELAISE@300x.png',
    capacity: '750ml',
    specs: 'Premium Glass • Multiple Colors',
    startingPrice: '$2.00',
    description: 'Traditional Bordeaux-style bottle, the gold standard for premium wine packaging.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'frosting',
    name: 'Custom Frosting',
    description: 'Eco-friendly frosting techniques for elegant bottle finishes',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNENBRjUwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DdXN0b20gRnJvc3Rpbmc8L3RleHQ+PC9zdmc+',
    features: ['Full bottle frosting', 'Partial frosting patterns', 'Custom logos/text frosting'],
    href: '/services/frosting',
  },
  {
    id: 'printing',
    name: 'Screen Printing',
    description: 'Multi-color printing with precise logo placement',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzIyRjM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TY3JlZW4gUHJpbnRpbmc8L3RleHQ+PC9zdmc+',
    features: ['Up to 4 colors', 'Logo placement options', 'Custom color matching'],
    href: '/services/screen-printing',
  },
  {
    id: 'embossing',
    name: 'Embossing',
    description: 'Raised and debossed designs for premium branding',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRDRBRjM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5FbWJvc3Npbmc8L3RleHQ+PC9zdmc+',
    features: ['Logo embossing', 'Text embossing', 'Decorative patterns'],
    href: '/services/embossing',
  },
  {
    id: 'thermal',
    name: 'Thermal Transfer',
    description: 'Photo-quality reproduction with full-color capability',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMkU1RDMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UaGVybWFsIFRyYW5zZmVyPC90ZXh0Pjwvc3ZnPg==',
    features: ['Complex logos with gradients', 'Photographic images', 'Scratch-resistant finish'],
    href: '/services/thermal-transfer',
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzRDQUY1MCIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjM2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+PoTwvdGV4dD48L3N2Zz4=',
    title: 'Direct China Sourcing',
    description: 'Eliminate middleman costs and access premium manufacturers directly',
  },
  {
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzcyMkYzNyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjM2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4pyFPC90ZXh0Pjwvc3ZnPg==',
    title: 'Quality Assurance',
    description: 'Rigorous inspection process and industry certifications',
  },
  {
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI0Q0QUYzNyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjM2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+JDwvdGV4dD48L3N2Zz4=',
    title: 'Competitive Bulk Pricing',
    description: 'Transparent pricing tiers with attractive volume discounts',
  },
  {
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzJFNUQzMSIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjM2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+aqzwvdGV4dD48L3N2Zz4=',
    title: 'Reliable Delivery',
    description: 'Australia-wide shipping with predictable timelines',
  },
];

export const CONTACT_INFO = {
  phone: '+61 (0) 000 000 000',
  email: 'info@capeglass.com.au',
  address: 'Melbourne, Australia',
};

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/bottles', label: 'Our Bottles' },
  { href: '/services/frosting', label: 'Custom Frosting' },
  { href: '/services/screen-printing', label: 'Screen Printing' },
  { href: '/services/embossing', label: 'Embossing' },
  { href: '/services/thermal-transfer', label: 'Thermal Transfer' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];