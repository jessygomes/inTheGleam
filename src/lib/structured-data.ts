// Structured Data / JSON-LD schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "inTheGleam",
  url: "https://www.inthegleam.com",
  logo: "https://www.inthegleam.com/logos/LogoPNG_inTheGleam_Black.png",
  description:
    "Freelancers spécialisés en développement web et mobile sur mesure. Sites vitrine, e-commerce, applications web modernes.",
  sameAs: ["https://www.linkedin.com/company/inthegleam"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "French",
  },
  founder: {
    "@type": "Person",
    name: "inTheGleam Team",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "inTheGleam",
  url: "https://www.inthegleam.com",
  description:
    "Freelancers spécialisés en développement web et mobile sur mesure.",
  inLanguage: "fr-FR",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.inthegleam.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement Web sur Mesure",
  provider: {
    "@type": "Organization",
    name: "inTheGleam",
    url: "https://www.inthegleam.com",
  },
  serviceType: "Web Development",
  description:
    "Services de développement web et mobile personnalisés incluant sites vitrine, e-commerce et applications web.",
  areaServed: "France",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Développement Web",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine",
          description: "Création de sites vitrine professionnels sur mesure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce",
          description: "Développement de boutiques en ligne performantes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Application Web",
          description: "Développement d'applications web modernes et réactives",
        },
      },
    ],
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
