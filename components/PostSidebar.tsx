'use client'

import Link from 'next/link'
import { Post } from '@/lib/posts'

interface PostSidebarProps {
  posts: Post[]
  activeSlug?: string
}

export default function PostSidebar({ posts, activeSlug }: PostSidebarProps) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-card">
        <h2 className="sidebar-title">
          All Posts
        </h2>

        <div className="sidebar-posts">
          {posts.length > 0 ? (
            posts.map((post, index) => {
              const isActive = activeSlug === post.slug || (activeSlug === undefined && index === 0)
              
              return (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="sidebar-post-link"
                >
                  <div className={`sidebar-post ${isActive ? 'active' : ''}`}>
                    <h3 className="sidebar-post-title">
                      {post.title}
                    </h3>
                    <p className="sidebar-post-date">
                      {post.formattedDate}
                    </p>
                  </div>
                </Link>
              )
            })
          ) : (
            <div className="sidebar-empty">
              <p className="sidebar-empty-text">No posts available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}