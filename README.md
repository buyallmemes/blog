# BuyAllMemes Blog

Modern developer blog built with Next.js 15, featuring clean design and optimized performance ✨

## 🚀 Live Site

- **Production**: [https://buyallmemes.com](https://buyallmemes.com)
- **Staging**: [https://main.d6a01bwd8g2xq.amplifyapp.com](https://main.d6a01bwd8g2xq.amplifyapp.com)

## 📚 Project Overview

A high-performance blog platform showcasing software engineering articles, tutorials, and insights. Built with modern web technologies and deployed on AWS Amplify with automatic CI/CD.

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 4.1.11** - Utility-first styling with new engine
- **Headless UI** - Unstyled, accessible UI components

### Content & Features
- **Markdown Processing** - Gray Matter + Remark for frontmatter parsing
- **Syntax Highlighting** - Prism.js with copy-to-clipboard
- **Dark/Light Theme** - System preference detection
- **Social Sharing** - LinkedIn, GitHub integration
- **SEO Optimized** - OpenGraph meta tags, structured data

### Development & Testing
- **ESLint 9.18.0** - Code linting with Next.js config
- **Playwright** - End-to-end testing
- **GitHub Actions** - Automated CI/CD pipeline
- **AWS Amplify** - Serverless hosting with SSR support

## 🏗️ Architecture

```
blog/
├── src/app/                 # Next.js App Router
│   ├── blog/[slug]/        # Dynamic blog post routes
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Layout.tsx          # Main layout with navigation
│   ├── PostSidebar.tsx     # Blog post navigation
│   ├── ThemeToggle.tsx     # Dark/light mode switcher
│   └── CodeBlock.tsx       # Syntax highlighted code blocks
├── lib/                    # Utility functions
│   └── posts.ts            # Markdown processing utilities
├── posts/                  # Markdown blog posts
├── public/                 # Static assets (images, icons)
└── tests/                  # Playwright E2E tests
```

## 🚀 Development

### Prerequisites
- **Node.js 22+** (LTS recommended)
- **npm 10+**

### Installation

```bash
# Clone the repository
git clone https://github.com/buyallmemes/blog.git
cd blog

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Building & Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build for production
npm run build

# Run E2E tests
npm test

# Run tests in headed mode
npm run test:headed
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new markdown file in `posts/` with format: `YYYYMMDD-slug.md`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-28"
excerpt: "Brief description of the post"
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

3. Add images to `public/images/` and reference them:

```markdown
![Alt text](/images/your-image.png)
```

### Supported Features

- **Code blocks** with syntax highlighting
- **Images** with proper sizing and optimization
- **Links** with external link indicators  
- **Headings** with anchor links
- **Lists** and **blockquotes**
- **Tables** with responsive styling

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```bash
# Optional: Analytics or external API keys
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Tailwind Customization

Edit `tailwind.config.ts`:

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        primary: '#your-color',
      },
      fontFamily: {
        // Custom fonts
        custom: ['Your Font', 'sans-serif'],
      },
    },
  },
}
```

## 🚀 Deployment

### AWS Amplify (Automatic)

The project automatically deploys to AWS Amplify on every push to `main`:

1. **Build**: Next.js SSR build with static generation
2. **Test**: Playwright E2E tests in CI/CD
3. **Deploy**: Automatic deployment to staging and production
4. **Domain**: Custom domain with SSL certificate

### Manual Deployment

```bash
# Build static export (if needed)
npm run build

# Deploy build artifacts to your hosting provider
# Build output is in `.next/` directory
```

## 🧪 Testing Strategy

### E2E Testing with Playwright

```bash
# Run all tests
npm test

# Run specific test file
npx playwright test blog.spec.ts

# Open test UI
npm run test:ui

# Generate test report
npx playwright show-report
```

### Test Coverage

- ✅ Homepage rendering and navigation
- ✅ Blog post routing and content display
- ✅ Dark/light theme switching
- ✅ Mobile responsive design
- ✅ Code block functionality
- ✅ Social sharing links

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Bundle Analysis
- **Total JS**: ~99.6KB gzipped
- **First Load**: ~104KB per page
- **Static Generation**: 11 pages pre-rendered
- **Build Time**: ~3 seconds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

### Development Guidelines

- Follow TypeScript strict mode
- Use ESLint configuration
- Write E2E tests for new features
- Ensure responsive design
- Optimize for performance and accessibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Blog**: [https://buyallmemes.com](https://buyallmemes.com)
- **LinkedIn**: [Mark Fenderov](https://www.linkedin.com/in/markfenderov/)
- **GitHub**: [@mfenderov](https://github.com/mfenderov)

---

Built with ❤️ using Next.js 15 and deployed on AWS Amplify
