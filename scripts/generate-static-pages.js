#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const POSTS_FILE = path.join(__dirname, '../src/app/posts.json');
const OUTPUT_DIR = path.join(__dirname, '../dist/blog/browser');
const TEMPLATE_FILE = path.join(__dirname, '../src/index-template.html');

// Simple HTML template for each blog post
const createPostHTML = (post) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>BuyAllMemes - ${post.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${post.title} - AI-compatible blog post">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px; 
      margin: 0 auto; 
      padding: 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 { color: #1976d2; border-bottom: 2px solid #1976d2; padding-bottom: 10px; }
    h2 { color: #424242; margin-top: 2rem; }
    h3 { color: #616161; }
    pre { background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; }
    blockquote { 
      border-left: 4px solid #1976d2; 
      margin: 1rem 0; 
      padding-left: 1rem; 
      background: #f9f9f9; 
    }
    .meta { color: #757575; font-size: 0.9rem; margin-bottom: 2rem; }
    .back-link { 
      display: inline-block; 
      margin-bottom: 2rem; 
      color: #1976d2; 
      text-decoration: none; 
    }
    .back-link:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <a href="/" class="back-link">← Back to BuyAllMemes Blog</a>
  
  <article>
    <h1>${post.title}</h1>
    <div class="meta">
      Published: ${post.date} | 
      <a href="https://www.buyallmemes.com/blog/${post.anchor}">Permalink</a>
    </div>
    
    <div class="content">
      ${post.content}
    </div>
  </article>

  <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #eee; color: #757575; text-align: center;">
    <p>AI-compatible static page | <a href="https://www.buyallmemes.com/">BuyAllMemes</a></p>
  </footer>
</body>
</html>`;

function generateStaticPages() {
  console.log('🔄 Generating static pages for AI compatibility...');
  
  try {
    // Read posts from JSON file
    if (!fs.existsSync(POSTS_FILE)) {
      throw new Error(`Posts file not found: ${POSTS_FILE}`);
    }
    
    const posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));
    console.log(`📚 Found ${posts.length} posts to generate`);
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Generate individual HTML files for each post
    let generated = 0;
    posts.forEach(post => {
      if (!post.anchor || !post.title || !post.content) {
        console.warn(`⚠️  Skipping invalid post: ${post.filename || 'unknown'}`);
        return;
      }
      
      const html = createPostHTML(post);
      const filename = `${post.anchor}.html`;
      const filepath = path.join(OUTPUT_DIR, filename);
      
      fs.writeFileSync(filepath, html, 'utf8');
      console.log(`✅ Generated: ${filename}`);
      generated++;
    });
    
    console.log(`🎉 Successfully generated ${generated} static pages for AI compatibility!`);
    console.log(`📁 Files saved to: ${OUTPUT_DIR}`);
    
    // List generated files for verification
    console.log('📝 Generated files:');
    posts.forEach(post => {
      if (post.anchor) {
        console.log(`   - ${post.anchor}.html (${post.title})`);
      }
    });
    
  } catch (error) {
    console.error('❌ Failed to generate static pages:', error.message);
    process.exit(1);
  }
}

generateStaticPages();