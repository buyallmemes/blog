/**
 * Represents a blog post in the application.
 * This interface defines the structure of post data received from the API
 * and used throughout the application for displaying blog content.
 */
export interface Post {
  /**
   * Unique identifier used for URL fragments and direct linking to posts.
   * Should be URL-friendly (no spaces or special characters).
   * Example: "getting-started-with-angular"
   */
  anchor: string;

  /**
   * The full HTML content of the post.
   * May contain formatted text, code blocks, images, and other HTML elements.
   * Will be rendered using the SafeHtml pipe.
   */
  content: string;

  /**
   * The title of the post displayed in headings and browser title.
   * Used for navigation, SEO, and social sharing.
   */
  title: string;

  /**
   * The publication date of the post.
   * Expected format: "YYYY-MM-DD" or human-readable date string.
   * Example: "2023-05-15" or "May 15, 2023"
   */
  date: string;
}
