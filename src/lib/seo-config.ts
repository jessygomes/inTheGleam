export const siteConfig = {
  name: "inTheGleam",
  title: "inTheGleam - Développement Web sur Mesure",
  description:
    "Freelancers spécialisés en développement web et mobile sur mesure. Sites vitrine, e-commerce, applications web modernes avec React, Next.js et plus.",
  url: "https://www.inthegleam.com",
  ogImage: "/logos/LogoPNG_inTheGleam_Black.png",
  keywords: [
    "développement web",
    "freelance",
    "site vitrine",
    "e-commerce",
    "React",
    "Next.js",
    "développeur web",
    "création site internet",
    "application web",
    "développement mobile",
    "sur mesure",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/inthegleam",
  },
  contact: {
    email: "contact@inthegleam.com",
  },
  analytics: {
    googleAnalyticsId: "GTM-5JM23FR7",
    umamiId: "52721484-2e96-43ea-a3c3-386377071862",
  },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string = "",
  keywords: string[] = [],
  noindex: boolean = false
) => {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
};
