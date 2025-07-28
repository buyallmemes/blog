# AWS Amplify Deployment Setup Documentation

**⚠️ READ THIS BEFORE CHANGING ANYTHING IN AMPLIFY CONFIG ⚠️**

This document explains the exact setup that finally worked after fighting through AWS Amplify's deployment manifest hell.

## 🎯 Final Working Configuration

### **amplify.yml Structure**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - echo "Setting up Node.js 20..."
        - nvm install 20
        - nvm use 20 
        - nvm alias default 20
        - echo "Node.js version $(node --version)"
        - echo "npm version $(npm --version)"
        - npm ci
    build:
      commands:
        - echo "Building static Angular application..."
        - npm run build
        - echo "Preparing static deployment structure like the working commit..."
        - mkdir -p .amplify-hosting/static
        - cp -r dist/blog/browser/* .amplify-hosting/static/
        - |
          cat > .amplify-hosting/deploy-manifest.json << 'EOF'
          {
            "version": 1,
            "routes": [
              {
                "path": "/*",
                "target": {
                  "kind": "Static"
                }
              }
            ],
            "framework": {
              "name": "angular",
              "version": "20.1.3"
            }
          }
          EOF
        - echo "Static deployment structure ready with manifest"
  artifacts:
    baseDirectory: .amplify-hosting
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 🔑 Critical Success Factors

### **1. Node.js Version**
- **MUST use Node.js 20+** (Angular 20 requirement)
- **MUST install and set alias** (`nvm alias default 20`)
- AWS Amplify defaults to Node.js 18, which breaks Angular 20

### **2. Directory Structure**
```
.amplify-hosting/
├── deploy-manifest.json     # ← MUST be at root of baseDirectory
└── static/                  # ← All Angular build files go here
    ├── index.html
    ├── main-*.js
    ├── assets/
    └── ...
```

### **3. deploy-manifest.json Format**
- **MUST be in `.amplify-hosting/` root** (not in static/)
- **MUST have `version: 1`**
- **MUST have routes array with catch-all `/*`**
- **MUST have framework metadata**

```json
{
  "version": 1,
  "routes": [
    {
      "path": "/*",
      "target": {
        "kind": "Static"
      }
    }
  ],
  "framework": {
    "name": "angular",
    "version": "20.1.3"
  }
}
```

### **4. Build Process**
1. `npm run build` → creates `dist/blog/browser/`
2. `mkdir -p .amplify-hosting/static` → create target directory
3. `cp -r dist/blog/browser/* .amplify-hosting/static/` → copy files
4. Create `deploy-manifest.json` in `.amplify-hosting/`

### **5. Artifacts Configuration**
- **baseDirectory: `.amplify-hosting`** (NOT `dist/blog/browser`)
- **files: `**/*`** (include everything)

## 💀 What DOESN'T Work (Learn from our pain)

### ❌ **Don't use `dist/blog/browser` as baseDirectory**
```yaml
# THIS BREAKS:
artifacts:
  baseDirectory: dist/blog/browser  # ← NO!
```
**Why**: Amplify expects `.amplify-hosting` structure for complex apps

### ❌ **Don't put deploy-manifest.json in wrong location**
```bash
# WRONG:
dist/blog/browser/deploy-manifest.json
.amplify-hosting/static/deploy-manifest.json

# CORRECT:
.amplify-hosting/deploy-manifest.json
```

### ❌ **Don't reference non-existent directories in routes**
```json
{
  "routes": [
    {
      "path": "/assets/*",  // ← NO! This breaks if directory doesn't exist
      "target": { "kind": "Static" }
    }
  ]
}
```

### ❌ **Don't skip Node.js setup**
```yaml
# THIS BREAKS Angular 20:
preBuild:
  commands:
    - npm ci  # ← Uses Node.js 18, Angular 20 fails
```

### ❌ **Don't remove deploy-manifest.json entirely**
AWS Amplify **REQUIRES** it once your app gets complex enough.

## 🏗️ Build-Time API Fetching Setup

### **scripts/fetch-posts.js**
```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const API_URL = 'https://api.buyallmemes.com/posts';
const OUTPUT_FILE = path.join(__dirname, '../src/app/posts.json');

function fetchPosts() {
  console.log('🔄 Fetching posts from API...');
  try {
    const curlResult = execSync(`curl -s "${API_URL}"`, { encoding: 'utf8' });
    const data = JSON.parse(curlResult);
    const posts = data.posts || data;
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
    console.log(`✅ Fetched ${posts.length} posts from API`);
  } catch (error) {
    console.error('❌ Failed to fetch posts:', error.message);
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf8');
    process.exit(1);
  }
}

fetchPosts();
```

### **package.json**
```json
{
  "scripts": {
    "fetch-posts": "node scripts/fetch-posts.js",
    "prebuild": "npm run fetch-posts",
    "build": "ng build --configuration production"
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

### **Angular Component (Simplified)**
```typescript
// src/app/blog/blog.component.ts
import postsData from '../posts.json';

export class BlogComponent implements OnInit {
  posts: Post[] = [];
  selectedPost?: Post;

  ngOnInit(): void {
    // Dead simple: get posts from API-generated JSON and show the right one
    this.posts = postsData as Post[];
    const postId = this.route.snapshot.paramMap.get('postId');
    this.selectedPost = this.posts.find(p => p.anchor === postId) || this.posts[0];
  }
}
```

## 🎯 AI Compatibility

This setup is **perfect for AI assistants** because:
- ✅ Content is embedded in static HTML
- ✅ Works with `curl` and `webfetch`
- ✅ No JavaScript execution required for content access
- ✅ Fast loading for both humans and AI

```bash
# AI assistants can easily fetch content:
curl -s "https://www.buyallmemes.com/blog/practical-dependency-inversion-principle"
```

## 🚨 Emergency Recovery

If deployment breaks again:

1. **Check Node.js version** in build logs
2. **Verify `.amplify-hosting` directory structure**
3. **Confirm deploy-manifest.json location and format**
4. **Compare with working commit**: `git show aeda80b`

## 📝 Working Commit Reference

**Last known working commit**: `aeda80b`
- Date: 2025-07-28
- Status: Build and deployment successful
- Features: Build-time API fetching, simplified Angular, AI-compatible

## 🎉 Success Metrics

When everything works correctly:
- ✅ Build phase passes without errors
- ✅ Site loads at `https://www.buyallmemes.com/`
- ✅ Specific URLs work: `/blog/practical-dependency-inversion-principle`
- ✅ Content is AI-accessible via curl/webfetch
- ✅ Posts update automatically on each build via API fetch

---

**Remember**: AWS Amplify deployment manifests are a special kind of hell. This setup works. Don't change it unless absolutely necessary. 🔥👹🔥