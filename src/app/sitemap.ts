import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://buyallmemes.com'
      : 'http://localhost:3000';

  // Get all blog posts
  const posts = await getAllPosts();

  // Create sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = posts.map(post => {
    // Convert date string to Date object for lastModified
    let lastModified: Date;
    if (post.date.includes('.')) {
      // DD.MM.YYYY format
      const [day, month, year] = post.date.split('.');
      lastModified = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );
    } else {
      // YYYY-MM-DD format
      lastModified = new Date(post.date);
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  // Static pages
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/lets-talk`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticEntries, ...blogEntries];
}
