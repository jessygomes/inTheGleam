import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  structuredData?: object;
  noindex?: boolean;
  keywords?: string[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "/logos/LogoPNG_inTheGleam_Black.png",
  ogType = "website",
  structuredData,
  noindex = false,
  keywords = [],
}: SEOProps) {
  const baseUrl = "https://www.inthegleam.com";
  const fullTitle = title
    ? `${title} | inTheGleam`
    : "inTheGleam - Développement Web sur Mesure";
  const defaultDescription =
    "Freelancers spécialisés en développement web et mobile sur mesure. Sites vitrine, e-commerce, applications web modernes.";
  const metaDescription = description || defaultDescription;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="inTheGleam" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Additional meta tags */}
      <meta name="author" content="inTheGleam" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="fr" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
