/**
 * Represents the entire blog data structure.
 * This interface defines the top-level structure of blog data received from the API,
 * containing an array of individual blog posts.
 */
import { Post } from '../post/post';

/**
 * Blog data structure containing all posts.
 * Used as the main data model for the blog component.
 */
export interface Blog {
  /**
   * Array of blog posts to be displayed.
   * The posts are typically sorted in reverse chronological order (newest first).
   * An empty array indicates no posts are available.
   */
  posts: Post[];
}
