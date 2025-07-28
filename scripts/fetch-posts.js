#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const API_URL = 'https://api.buyallmemes.com/posts';
const OUTPUT_FILE = path.join(__dirname, '../src/app/posts.json');

async function fetchPosts() {
  console.log('🔄 Fetching posts from API...');
  
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const posts = data.posts || data; // Handle both {posts: [...]} and [...] formats
    
    console.log(`✅ Fetched ${posts.length} posts from API`);
    
    // Write to JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
    
    console.log(`✅ Posts saved to ${OUTPUT_FILE}`);
    console.log('📝 Posts:');
    posts.forEach(post => {
      console.log(`   - "${post.title}" (${post.anchor})`);
    });
    
  } catch (error) {
    console.error('❌ Failed to fetch posts:', error.message);
    
    // Create empty posts file as fallback
    console.log('⚠️  Creating empty posts file as fallback...');
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf8');
    
    process.exit(1);
  }
}

fetchPosts();