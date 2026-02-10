export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FireKiwi",
    url: "https://www.firekiwi.com",
    logo: "https://www.firekiwi.com/images/logo.png",
    description:
      "AI-powered eBay listing generator that transforms product photos into complete, optimized eBay listings in seconds.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@firekiwi.com",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FireKiwi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      description: "Free tier available. Join waitlist for early access.",
    },
    description:
      "AI-powered tool that generates complete eBay listings from product photos. Creates optimized titles, descriptions, and pricing suggestions in seconds.",
    featureList: [
      "AI-powered listing generation",
      "Photo-to-listing conversion",
      "SEO-optimized titles",
      "Market-based pricing suggestions",
      "Direct eBay integration",
      "Bulk listing support",
      "Mobile compatible",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.firekiwi.com",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FireKiwi",
    url: "https://www.firekiwi.com",
    description:
      "AI-powered eBay listing generator. Turn product photos into complete, optimized eBay listings in seconds.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.firekiwi.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}




