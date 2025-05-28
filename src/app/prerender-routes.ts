import { Blog } from './blog/blog';
import { BlogService } from './blog/blog.service';

/**
 * Get dynamic routes for prerendering based on blog posts
 * This function fetches all blog posts and returns routes that should be prerendered
 */
export async function getPrerenderRoutes(): Promise<string[]> {
  // Always prerender the home route
  const routes: string[] = ['/'];

  try {
    // Create a blog service instance to fetch blog data
    const blogService = new BlogService();
    const blog: Blog = await blogService.fetchBlog().toPromise();

    // Add a route for each blog post
    if (blog && blog.posts) {
      blog.posts.forEach(post => {
        routes.push(`/blog/${post.anchor}`);
      });
    }

    return routes;
  } catch (error) {
    console.error('Error generating prerender routes:', error);
    return routes;
  }
}
