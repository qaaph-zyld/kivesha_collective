import { Metadata } from 'next'

export const siteConfig = {
  name: 'Kivesha Collective',
  url: 'https://kiveshacollective.com',
  description: 'High-ticket marketing solutions to scale your business to $10K+ months with proven strategies and expert guidance.',
  links: {
    twitter: 'https://twitter.com/kiveshacollective',
    linkedin: 'https://linkedin.com/company/kiveshacollective',
  },
}

export const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  ],
}

export const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: siteConfig.name,
  description: siteConfig.description,
  images: ['/og-image.jpg'],
  creator: '@kiveshacollective',
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'high ticket marketing',
    'business growth',
    'sales funnel',
    'digital marketing',
    'premium marketing services',
    'Kivesha Collective',
  ],
  authors: [
    {
      name: 'Kivesha Collective',
      url: siteConfig.url,
    },
  ],
  creator: 'Kivesha Collective',
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
