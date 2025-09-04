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
- **Code Enhancement** - Copy-to-clipboard functionality for code blocks
- **Dark/Light Theme** - System preference detection with toggle
- **Social Sharing** - LinkedIn, GitHub integration
- **SEO Optimized** - OpenGraph meta tags, structured data, sitemaps

### Development & Testing

- **ESLint 9.18.0** - Code linting with Next.js config
- **Playwright** - End-to-end testing
- **GitHub Actions** - Automated CI/CD pipeline
- **AWS Amplify** - Serverless hosting with SSR support

## 🏗️ Architecture

```
blog/
├── src/app/                 # Next.js App Router
│   ├── api/content-images/ # Image serving API route
│   ├── blog/[slug]/        # Dynamic blog post routes
│   ├── lets-talk/          # Consulting page
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Layout.tsx          # Main layout with navigation
│   ├── ThemeToggle.tsx     # Dark/light mode switcher
│   ├── CodeEnhancer.tsx    # Copy-to-clipboard for code blocks
│   ├── StructuredData.tsx  # SEO structured data
│   └── ServiceStructuredData.tsx # Service page schema
├── lib/                    # Utility functions
│   └── posts.ts            # Markdown processing utilities
├── content/                # Markdown blog posts
│   └── [slug]/
│       ├── index.md        # Post content
│       └── images/         # Post-specific images (optional)
├── public/                 # Static assets (favicon, etc)
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

1. Create a new directory in `content/` with your desired slug: `content/your-post-slug/`
2. Create `index.md` in that directory with frontmatter:

```markdown
---
title: 'Your Post Title'
date: 'DD.MM.YYYY'
---

Your markdown content here...
```

3. Add images to `content/your-post-slug/images/` and reference them:

```markdown
![Alt text](images/your-image.png)
```

**Note**: Images are automatically served via Next.js API route at `/blog/[slug]/images/[...path]`

### Supported Features

- **Code blocks** with syntax highlighting
- **Images** with proper sizing and optimization
- **Links** with external link indicators
- **Headings** with anchor links
- **Lists** and **blockquotes**
- **Tables** with responsive styling

## 🔧 Configuration

### Environment Variables

No environment variables required for local development. The application works entirely with static content generation.

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
};
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

- **Total JS**: ~99.7KB gzipped (optimized after cleanup)
- **First Load**: ~104KB per page
- **Static Generation**: All blog posts + pages pre-rendered
- **Build Time**: ~2 seconds (improved with Turbopack)

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
