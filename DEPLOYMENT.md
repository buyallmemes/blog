# Deployment Guide - BuyAllMemes Blog

This guide covers deploying the Next.js 15 static blog to AWS Amplify.

## Prerequisites

- AWS Account with Amplify access
- GitHub repository connected to AWS Amplify
- Domain configured (buyallmemes.com)

## AWS Amplify Configuration

### 1. Build Settings

The `amplify.yml` file is already configured with the following build specification:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 2. Environment Variables

Configure these environment variables in the Amplify console:

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://buyallmemes.com` | Site URL for SEO and sharing |
| `NODE_ENV` | `production` | Node environment |

### 3. Domain Configuration

1. Go to AWS Amplify Console → Your App → Domain management
2. Add custom domain: `buyallmemes.com`
3. Configure DNS settings as provided by Amplify
4. Wait for SSL certificate provisioning (5-10 minutes)

### 4. Branch Settings

- **Main Branch**: `main` → Production deployment
- **Auto-deploy**: Enabled for main branch
- **Build**: Automatically triggered on push to main

## Build Verification

Before deploying, verify the build works locally:

```bash
# Install dependencies
npm ci

# Run tests
npm test

# Build static export
npm run build

# Verify output directory
ls -la out/
```

Expected output structure:
```
out/
├── _next/           # Next.js assets
├── blog/            # Blog post pages
│   ├── let-go/
│   ├── testing-guideline/
│   └── ...
├── images/          # Static images
├── index.html       # Home page
└── 404.html         # Error page
```

## Performance Optimizations

The configuration includes several optimizations:

1. **Static Export**: Full static site generation
2. **Bundle Splitting**: Vendor chunks separated
3. **Image Optimization**: Disabled for static export compatibility
4. **Caching**: Build cache enabled for faster rebuilds
5. **Compression**: Automatic gzip compression by Amplify

## Monitoring

### Build Logs
- Access build logs in Amplify Console → Build history
- Monitor build time and bundle size

### Performance Metrics
- Use Lighthouse for performance auditing
- Monitor Core Web Vitals in production

### Error Monitoring
- Check Amplify build logs for deployment issues
- Monitor 404 errors through analytics

## Rollback Strategy

If deployment fails:

1. **Automatic Rollback**: Amplify keeps previous version active
2. **Manual Rollback**: Use Amplify Console → Deployments → Redeploy
3. **Hotfix**: Create hotfix branch and redeploy

## DNS Configuration

For custom domain (buyallmemes.com):

1. **Primary Domain**: buyallmemes.com → Amplify app
2. **WWW Redirect**: www.buyallmemes.com → buyallmemes.com
3. **SSL**: Automatic via AWS Certificate Manager

## Security Headers

The following security headers are configured in `next.config.ts`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

Note: Headers configuration is ignored in static export mode, so these need to be configured at the Amplify/CloudFront level if needed.

## Troubleshooting

### Build Failures

1. **Dependencies**: Ensure all dependencies are in `package.json`
2. **Node Version**: Amplify uses Node.js 18 by default
3. **Memory**: Large builds may need memory optimization

### Static Export Issues

1. **Dynamic Routes**: Ensure all blog posts are generated at build time
2. **API Routes**: Not supported in static export mode
3. **Server Components**: Client components marked with 'use client'

### Performance Issues

1. **Bundle Size**: Use `npm run analyze` to check bundle size
2. **Images**: Ensure images are optimized before deployment
3. **Fonts**: Use system fonts or preload custom fonts

## Post-Deployment Checklist

- [ ] Verify site loads at buyallmemes.com
- [ ] Test all blog post pages
- [ ] Verify share buttons functionality
- [ ] Check mobile responsiveness
- [ ] Test social media previews
- [ ] Confirm SEO meta tags
- [ ] Verify SSL certificate
- [ ] Test 404 page handling

## Cost Optimization

Current expected AWS costs:

- **Amplify Hosting**: ~$1-5/month (depending on traffic)
- **Data Transfer**: ~$0.09/GB (first 15GB free)
- **Build Minutes**: Free tier includes 1000 build minutes/month

Total estimated cost: < $10/month for moderate traffic blog.