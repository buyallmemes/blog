interface ServiceStructuredDataProps {
  title: string;
  description: string;
}

export function ServiceStructuredData({
  title,
  description,
}: ServiceStructuredDataProps) {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://buyallmemes.com'
      : 'http://localhost:3000';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: title,
    description: description,
    url: `${baseUrl}/lets-talk`,
    serviceType: [
      'Software Architecture Consulting',
      'System Design Review',
      'Technical Mentoring',
      'Legacy System Migration',
      'Distributed Systems Design',
    ],
    provider: {
      '@type': 'Person',
      name: 'Mark Fenderov',
      jobTitle: 'Staff Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'HelloFresh',
        url: 'https://www.hellofresh.com',
      },
      url: 'https://www.linkedin.com/in/mark-fenderov/',
      sameAs: [
        'https://www.linkedin.com/in/mark-fenderov/',
        'https://github.com/mfenderov',
        'https://buyallmemes.com',
      ],
      knowsAbout: [
        'Software Architecture',
        'System Design',
        'Go Programming',
        'Java Development',
        'Distributed Systems',
        'Microservices',
        'AWS Cloud Architecture',
        'Event-Driven Architecture',
        'Legacy System Modernization',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Oracle Certified Java Developer',
        },
        {
          '@type': 'WorkExperience',
          name: '15+ Years Software Engineering Experience',
          description: 'Deutsche Telekom customer portal rebuild leadership',
        },
      ],
    },
    areaServed: {
      '@type': 'Place',
      name: 'Global',
    },
    availableLanguage: 'English',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Consultation Booking',
        url: 'https://calendly.com/mfenderov/30min',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Professional Inquiry',
        url: 'https://www.linkedin.com/in/mark-fenderov/',
        availableLanguage: 'English',
      },
    ],
    offers: {
      '@type': 'Offer',
      name: 'Architecture Consulting Session',
      description:
        'Technical consultation for complex system architecture challenges',
      category: 'Professional Services',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Architecture Review',
          description:
            'Comprehensive system architecture analysis and recommendations',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legacy System Migration',
          description:
            'Strategic planning and execution of legacy system modernization',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Mentoring',
          description: 'Engineering leadership and technical skill development',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'System Design Consultation',
            category: 'Software Architecture',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Distributed Systems Design',
            category: 'Software Architecture',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Optimization',
            category: 'System Performance',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Organization',
        name: 'Deutsche Telekom',
      },
      reviewBody: 'Led successful customer portal rebuild with 200+ engineers',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  description: string;
}

export function PersonStructuredData({
  name,
  jobTitle,
  description,
}: PersonStructuredDataProps) {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://buyallmemes.com'
      : 'http://localhost:3000';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: jobTitle,
    description: description,
    url: `${baseUrl}/lets-talk`,
    mainEntityOfPage: `${baseUrl}/lets-talk`,
    sameAs: [
      'https://www.linkedin.com/in/mark-fenderov/',
      'https://github.com/mfenderov',
      baseUrl,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'HelloFresh',
      url: 'https://www.hellofresh.com',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Staff Software Engineer',
      occupationLocation: {
        '@type': 'Place',
        name: 'Global Remote',
      },
      skills: [
        'Software Architecture',
        'System Design',
        'Go Programming',
        'Java Development',
        'Distributed Systems',
        'AWS Cloud Architecture',
        'Technical Leadership',
      ],
    },
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Software Architecture',
      },
      {
        '@type': 'Thing',
        name: 'Distributed Systems',
      },
      {
        '@type': 'Thing',
        name: 'System Design',
      },
      {
        '@type': 'Thing',
        name: 'Go Programming Language',
      },
      {
        '@type': 'Thing',
        name: 'Java Programming Language',
      },
      {
        '@type': 'Thing',
        name: 'Cloud Architecture',
      },
      {
        '@type': 'Thing',
        name: 'Technical Leadership',
      },
    ],
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Deutsche Telekom',
        description: 'Led customer portal rebuild project',
      },
    ],
    award: [
      {
        '@type': 'Thing',
        name: 'Oracle Certified Java Developer',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional',
      url: 'https://calendly.com/mfenderov/30min',
      availableLanguage: 'English',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
