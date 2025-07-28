#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const API_URL = 'https://api.buyallmemes.com/posts';
const OUTPUT_FILE = path.join(__dirname, '../src/app/posts.json');

function fetchPosts() {
  console.log('🔄 Fetching posts from API...');
  
  try {
    // Use curl for maximum compatibility in CI environments
    console.log(`🌐 Fetching from: ${API_URL}`);
    const curlResult = execSync(`curl -s "${API_URL}"`, { encoding: 'utf8' });
    
    const data = JSON.parse(curlResult);
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