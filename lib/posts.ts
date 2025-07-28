import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMatter {
  title: string
  date: string
}

export interface Post {
  slug: string
  title: string
  date: string
  formattedDate: string
  content: string
  excerpt: string
  wordCount: number
}

function formatDate(dateStr: string): string {
  // Handle both DD.MM.YYYY and YYYY-MM-DD formats
  let date: Date
  
  if (dateStr.includes('.')) {
    // DD.MM.YYYY format
    const [day, month, year] = dateStr.split('.')
    date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  } else {
    // YYYY-MM-DD format
    date = new Date(dateStr)
  }
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

function createExcerpt(content: string, length: number = 200): string {
  // Strip HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '')
  
  if (plainText.length <= length) {
    return plainText
  }
  
  return plainText.substring(0, length).trim() + '...'
}

function countWords(content: string): number {
  const plainText = content.replace(/<[^>]*>/g, '')
  return plainText.split(/\s+/).filter(word => word.length > 0).length
}

function getSlugFromFilename(filename: string): string {
  // Extract slug from filename like "20240329-hello-world.md"
  const nameWithoutExt = filename.replace(/\.md$/, '')
  const parts = nameWithoutExt.split('-')
  
  // Remove date part (first part) and join the rest
  if (parts.length > 1 && /^\d{8}$/.test(parts[0])) {
    return parts.slice(1).join('-')
  }
  
  return nameWithoutExt
}

export async function getPostSlugs(): Promise<string[]> {
  const filenames = fs.readdirSync(postsDirectory)
  return filenames
    .filter(name => name.endsWith('.md'))
    .map(filename => getSlugFromFilename(filename))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filenames = fs.readdirSync(postsDirectory)
    const filename = filenames.find(name => 
      name.endsWith('.md') && getSlugFromFilename(name) === slug
    )
    
    if (!filename) {
      return null
    }
    
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const matterData = data as PostMatter
    
    // Process markdown to HTML and fix image paths
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content)
    
    let htmlContent = processedContent.toString()
    
    // Fix image paths: convert assets/folder/image.png to /images/folder/image.png
    htmlContent = htmlContent.replace(
      /src="assets\/([^"]+)"/g, 
      'src="/images/$1"'
    )
    
    return {
      slug,
      title: matterData.title,
      date: matterData.date,
      formattedDate: formatDate(matterData.date),
      content: htmlContent,
      excerpt: createExcerpt(htmlContent, 200),
      wordCount: countWords(htmlContent)
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(slug => getPostBySlug(slug))
  )
  
  // Filter out null results and sort by date (newest first)
  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      // Convert dates for comparison
      const dateA = new Date(a.date.includes('.') ? 
        a.date.split('.').reverse().join('-') : a.date)
      const dateB = new Date(b.date.includes('.') ? 
        b.date.split('.').reverse().join('-') : b.date)
      
      return dateB.getTime() - dateA.getTime()
    })
}

export async function getLatestPost(): Promise<Post | null> {
  const posts = await getAllPosts()
  return posts.length > 0 ? posts[0] : null
}