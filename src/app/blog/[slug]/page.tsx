import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import CodeEnhancer from '@/components/CodeEnhancer'
import Link from 'next/link'
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://buyallmemes.com' 
    : 'http://localhost:3000'

  return {
    title: `${post.title} - BuyAllMemes Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'BuyAllMemes Blog',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts()
  ])

  if (!post) {
    notFound()
  }


  return (
    <Layout>
      <div className="main">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">All Posts</h2>
          <ul className="sidebar-list">
            {allPosts.map((p) => (
              <li key={p.slug} className="sidebar-item">
                <Link 
                  href={`/blog/${p.slug}`}
                  className={`sidebar-link ${slug === p.slug ? 'active' : ''}`}
                >
                  {p.title}
                  <div className="sidebar-date">{p.formattedDate}</div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="article">
          <header className="article-header">
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <div className="article-date">{post.formattedDate}</div>
            </div>
          </header>
          
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <CodeEnhancer />
        </main>
      </div>
    </Layout>
  )
}