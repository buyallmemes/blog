import { getAllPosts, getLatestPost } from '@/lib/posts';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default async function HomePage() {
  const [posts, latestPost] = await Promise.all([
    getAllPosts(),
    getLatestPost(),
  ]);

  return (
    <Layout>
      <div className="main">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">All Posts</h2>
          <ul className="sidebar-list">
            {posts.map(post => (
              <li key={post.slug} className="sidebar-item">
                <Link
                  href={`/blog/${post.slug}`}
                  className={`sidebar-link ${latestPost?.slug === post.slug ? 'active' : ''}`}
                >
                  {post.title}
                  <div className="sidebar-date">{post.formattedDate}</div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="article">
          {latestPost ? (
            <div className="home-article">
              <header className="article-header">
                <h1 className="article-title">{latestPost.title}</h1>
                <div className="article-meta">
                  <div className="article-date">{latestPost.formattedDate}</div>
                </div>
              </header>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: latestPost.content }}
              />
            </div>
          ) : (
            <div className="home-article">
              <h2>No Posts Found</h2>
              <p>Check back later for new content!</p>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}
