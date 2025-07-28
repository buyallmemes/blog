/**
 * Represents a blog post in the application.
 * This interface defines the structure of post data received from the API
 * and used throughout the application for displaying blog content.
 */
export interface Post {
  anchor: string;
  title: string;
  content: string;
  date: string;
  filename: string;
}
