import { Post } from '@/lib/posts';

interface ArticleStructuredDataProps {
  post: Post;
}

export function ArticleStructuredData({ post }: ArticleStructuredDataProps) {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://buyallmemes.com'
      : 'http://localhost:3000';

  // Convert date for ISO format
  let isoDate: string;
  if (post.date.includes('.')) {
    const [day, month, year] = post.date.split('.');
    isoDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    ).toISOString();
  } else {
    isoDate = new Date(post.date).toISOString();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Mark Fenderov',
      url: 'https://www.linkedin.com/in/mark-fenderov/',
      sameAs: [
        'https://www.linkedin.com/in/mark-fenderov/',
        'https://github.com/mfenderov',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'BuyAllMemes Blog',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`,
      },
    },
    datePublished: isoDate,
    dateModified: isoDate,
    url: `${baseUrl}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    wordCount: post.wordCount,
    articleBody: post.content.replace(/<[^>]*>/g, ''), // Strip HTML for plain text
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'BuyAllMemes Blog',
      url: baseUrl,
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Software Engineering',
      },
      {
        '@type': 'Thing',
        name: 'Web Development',
      },
      {
        '@type': 'Thing',
        name: 'Programming',
      },
    ],
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

interface WebsiteStructuredDataProps {
  title: string;
  description: string;
}

export function WebsiteStructuredData({
  title,
  description,
}: WebsiteStructuredDataProps) {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://buyallmemes.com'
      : 'http://localhost:3000';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: title,
    description,
    url: baseUrl,
    author: {
      '@type': 'Person',
      name: 'Mark Fenderov',
      url: 'https://www.linkedin.com/in/mark-fenderov/',
      sameAs: [
        'https://www.linkedin.com/in/mark-fenderov/',
        'https://github.com/mfenderov',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'BuyAllMemes Blog',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
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
