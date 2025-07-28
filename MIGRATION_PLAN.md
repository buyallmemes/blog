# Migration Plan: Angular Frontend → Go Lambda Server-Side Rendering

## Overview

Migrate from current Angular SPA + Go Lambda API architecture to a single Go Lambda handling both API and server-side HTML rendering for better AI compatibility, simpler maintenance, and reduced complexity.

**Current Architecture:**
- GitHub (markdown files) → Go Lambda API → Angular SPA
- Complex Angular build pipeline with Node.js requirements
- AWS Amplify hosting with deployment manifest complexity

**Target Architecture:**
- GitHub (markdown files) → Go Lambda (API + HTML rendering)
- Single Go binary deployment
- Server-side rendered HTML for perfect AI compatibility
- Simplified hosting and maintenance

---

## Phase 1: Architecture Analysis & Design

### Ticket #36: Analyze Current Go Lambda API Structure
**Priority:** High  
**Estimate:** 2 hours  
**Dependencies:** None

**Description:**
Examine the existing `blog-api` Go Lambda to understand:
- Current routing and handler structure
- Domain/usecase/infrastructure layers
- How posts are fetched and processed
- Extension points for HTML rendering

**Acceptance Criteria:**
- [ ] Document current Lambda architecture
- [ ] Identify where to add HTML routing
- [ ] Map existing domain models to HTML templates
- [ ] Understand current configuration and environment variables

**Files to examine:**
- `blog-api/main.go` - Entry point and handler
- `blog-api/src/domain/blog/` - Domain entities
- `blog-api/src/usecase/blog/` - Business logic
- `blog-api/template.yaml` - AWS SAM configuration

---

### Ticket #37: Design URL Routing Scheme
**Priority:** High  
**Estimate:** 1 hour  
**Dependencies:** #36

**Description:**
Define URL routing strategy for serving both API and HTML responses from single Lambda.

**Acceptance Criteria:**
- [ ] Document URL routing scheme:
  - `/api/posts` → JSON response (keep existing)
  - `/blog/{post-anchor}` → HTML rendered post
  - `/` → HTML home page with post list
  - `/static/*` → Static assets (CSS, images, favicon)
- [ ] Define routing logic in Go (using path patterns)
- [ ] Plan backward compatibility for existing API consumers

**Deliverables:**
- Routing specification document
- Go routing implementation approach

---

### Ticket #38: Create HTML Template System Design
**Priority:** High  
**Estimate:** 2 hours  
**Dependencies:** #36, #37

**Description:**
Design HTML template system using Go's `html/template` package for server-side rendering.

**Acceptance Criteria:**
- [ ] Design base layout template (`base.html`)
- [ ] Design blog post template (`post.html`)
- [ ] Design home page template (`home.html`)  
- [ ] Plan template data structures
- [ ] Design CSS approach (inline, embedded, or served separately)
- [ ] Plan SEO meta tags structure

**Template Requirements:**
- Clean, readable HTML for AI compatibility
- Responsive design for mobile
- Syntax highlighting for code blocks
- Navigation between posts
- SEO-friendly meta tags

**Deliverables:**
- Template structure specification
- Sample template files
- CSS strategy document

---

## Phase 2: Implementation

### Ticket #39: Add Static Asset Serving Capability
**Priority:** Medium  
**Estimate:** 3 hours  
**Dependencies:** #37, #38

**Description:**
Implement static asset serving within Go Lambda for CSS, images, and favicon.

**Acceptance Criteria:**
- [ ] Embed static assets in Go binary using `embed` package
- [ ] Create handler for `/static/*` routes
- [ ] Implement proper MIME type detection
- [ ] Add caching headers for static assets
- [ ] Test asset serving locally with SAM CLI

**Assets to handle:**
- CSS stylesheets
- Images from blog posts (`assets/` directory)
- Favicon
- Any JavaScript if needed (minimal)

**Implementation Notes:**
- Use `//go:embed` to embed assets in binary
- Set appropriate `Content-Type` headers
- Add `Cache-Control` headers for performance

---

### Ticket #40: Extend Lambda Handler for Routing
**Priority:** High  
**Estimate:** 4 hours  
**Dependencies:** #36, #37

**Description:**
Modify the main Lambda handler to route between API and HTML responses based on URL path.

**Acceptance Criteria:**
- [ ] Extend `handler()` function in `main.go`
- [ ] Implement URL routing logic
- [ ] Route `/api/*` to existing JSON handlers
- [ ] Route `/blog/*` and `/` to new HTML handlers
- [ ] Route `/static/*` to static asset handler
- [ ] Maintain backward compatibility for existing API
- [ ] Add proper error handling for 404s

**Implementation Approach:**
```go
// Route based on request path
switch {
case strings.HasPrefix(path, "/api/"):
    return handleAPI(ctx, request)
case strings.HasPrefix(path, "/blog/"):
    return handleBlogPost(ctx, request)
case path == "/":
    return handleHome(ctx, request)
case strings.HasPrefix(path, "/static/"):
    return handleStatic(ctx, request)
default:
    return handle404(ctx, request)
}
```

---

### Ticket #41: Implement HTML Rendering Handlers
**Priority:** High  
**Estimate:** 6 hours  
**Dependencies:** #38, #40

**Description:**
Create HTML rendering handlers for blog posts and home page using the template system.

**Acceptance Criteria:**
- [ ] Implement `handleHome()` - renders post list
- [ ] Implement `handleBlogPost()` - renders individual post
- [ ] Create template rendering utilities
- [ ] Add proper error handling for missing posts
- [ ] Generate breadcrumb navigation
- [ ] Add post metadata (date, title, anchor)

**Handler Requirements:**
- Reuse existing blog service from current API
- Render HTML using designed templates
- Handle post not found (404) gracefully
- Generate navigation between posts
- Include SEO meta tags

**HTML Requirements:**
- Semantic HTML5 structure
- Accessible markup
- Mobile-responsive design
- Fast loading (minimal CSS/JS)

---

### Ticket #42: Add SEO and Social Media Optimization
**Priority:** Medium  
**Estimate:** 2 hours  
**Dependencies:** #41

**Description:**
Implement SEO meta tags and Open Graph tags for social media sharing.

**Acceptance Criteria:**
- [ ] Add standard SEO meta tags (title, description, keywords)
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card meta tags
- [ ] Generate post-specific meta descriptions
- [ ] Add canonical URLs
- [ ] Add JSON-LD structured data for blog posts

**Meta Tags to Include:**
```html
<!-- Standard SEO -->
<title>{{.Title}} - BuyAllMemes Blog</title>
<meta name="description" content="{{.Description}}">
<meta name="keywords" content="{{.Keywords}}">

<!-- Open Graph -->
<meta property="og:title" content="{{.Title}}">
<meta property="og:description" content="{{.Description}}">
<meta property="og:type" content="article">
<meta property="og:url" content="{{.CanonicalURL}}">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{{.Title}}">
<meta name="twitter:description" content="{{.Description}}">
```

---

## Phase 3: Testing & Validation

### Ticket #43: Test Lambda Locally with SAM CLI
**Priority:** High  
**Estimate:** 3 hours  
**Dependencies:** #41, #42

**Description:**
Test the extended Lambda locally using AWS SAM CLI to ensure both API and HTML responses work correctly.

**Acceptance Criteria:**
- [ ] Set up local SAM development environment
- [ ] Test API endpoints (backward compatibility)
  - `GET /api/posts` → JSON response
- [ ] Test HTML endpoints
  - `GET /` → Home page HTML
  - `GET /blog/{post-anchor}` → Post HTML
  - `GET /static/style.css` → CSS file
- [ ] Test error handling (404s, invalid routes)
- [ ] Verify MIME types and headers
- [ ] Performance test (response times)

**Testing Commands:**
```bash
sam local start-api
curl http://localhost:3000/api/posts
curl http://localhost:3000/
curl http://localhost:3000/blog/practical-dependency-inversion-principle
```

---

### Ticket #44: Deploy to Staging Environment
**Priority:** High  
**Estimate:** 2 hours  
**Dependencies:** #43

**Description:**
Deploy the updated Lambda to a staging AWS environment for integration testing.

**Acceptance Criteria:**
- [ ] Deploy to AWS using SAM CLI
- [ ] Configure staging environment variables
- [ ] Test all endpoints in AWS environment
- [ ] Verify GitHub integration works
- [ ] Test with different devices/browsers
- [ ] Monitor CloudWatch logs for errors

**Deployment Commands:**
```bash
sam build
sam deploy --stack-name blog-api-staging --capabilities CAPABILITY_IAM
```

---

### Ticket #45: Verify AI Compatibility
**Priority:** High  
**Estimate:** 1 hour  
**Dependencies:** #44

**Description:**
Test AI compatibility by verifying content is accessible via curl and webfetch tools.

**Acceptance Criteria:**
- [ ] Test with curl - verify HTML content is returned
- [ ] Test with webfetch - verify AI can read content
- [ ] Verify no JavaScript required for content access
- [ ] Test post content extraction
- [ ] Test navigation links work

**Testing Commands:**
```bash
curl -s https://staging-api.buyallmemes.com/blog/practical-dependency-inversion-principle
curl -s https://staging-api.buyallmemes.com/ | grep -o '<title>.*</title>'
```

**Success Criteria:**
- AI tools can extract full post content
- No JavaScript execution required
- Clean HTML structure for parsing

---

### Ticket #46: Add HTMX for Interactive Features (Optional)
**Priority:** Low  
**Estimate:** 3 hours  
**Dependencies:** #45

**Description:**
Add HTMX library for any interactive features if needed (search, comments, etc.).

**Acceptance Criteria:**
- [ ] Evaluate if interactivity is needed
- [ ] Add HTMX library (CDN or embedded)
- [ ] Implement interactive features (if any):
  - Post search/filtering
  - Dynamic post loading
  - Comment system integration
- [ ] Test progressive enhancement

**Note:** This ticket may be skipped if blog remains fully static.

---

## Phase 4: Migration & Deployment

### Ticket #47: Configure Custom Domain for Lambda
**Priority:** Medium  
**Estimate:** 2 hours  
**Dependencies:** #44

**Description:**
Set up custom domain for the Lambda API Gateway (separate from current Amplify domain).

**Acceptance Criteria:**
- [ ] Create API Gateway custom domain
- [ ] Configure SSL certificate (AWS Certificate Manager)
- [ ] Set up DNS record for temporary domain (e.g., `new.buyallmemes.com`)
- [ ] Test custom domain with all endpoints
- [ ] Document domain configuration process

**AWS Resources:**
- API Gateway Custom Domain Name
- Route 53 DNS record
- ACM SSL Certificate

---

### Ticket #48: Test Production Deployment
**Priority:** High  
**Estimate:** 2 hours  
**Dependencies:** #47

**Description:**
Deploy to production environment with temporary domain and perform comprehensive testing.

**Acceptance Criteria:**
- [ ] Deploy to production AWS account
- [ ] Configure production environment variables
- [ ] Test all functionality on temporary domain
- [ ] Performance testing (load times, memory usage)
- [ ] Monitor CloudWatch metrics
- [ ] Test error scenarios

**Performance Targets:**
- Page load time < 2 seconds
- Lambda cold start < 3 seconds
- Memory usage < 256MB

---

### Ticket #49: Migrate buyallmemes.com Domain
**Priority:** High  
**Estimate:** 1 hour  
**Dependencies:** #48

**Description:**
Migrate the main domain from AWS Amplify to the new Lambda setup.

**Acceptance Criteria:**
- [ ] Update DNS records to point to new Lambda
- [ ] Test domain migration with minimal downtime
- [ ] Verify all routes work on main domain
- [ ] Set up proper redirects if needed
- [ ] Monitor traffic and error rates post-migration

**Migration Steps:**
1. Lower TTL on DNS records
2. Update Route 53 records to point to Lambda
3. Test immediately after change
4. Monitor for 24 hours

**Rollback Plan:**
- Keep Amplify deployment active during migration
- Can quickly revert DNS if issues arise

---

### Ticket #50: Cleanup Angular Artifacts
**Priority:** Low  
**Estimate:** 1 hour  
**Dependencies:** #49

**Description:**
Remove Angular deployment and cleanup unused files after successful migration.

**Acceptance Criteria:**
- [ ] Disable/delete AWS Amplify application
- [ ] Archive Angular frontend code (don't delete immediately)
- [ ] Update repository README
- [ ] Clean up GitHub Actions (if any Angular-specific)
- [ ] Update project documentation

**Files to Archive:**
- `blog/` directory (Angular app)
- `amplify.yml`
- Node.js related files
- Angular build scripts

**Note:** Keep files archived for 30 days before permanent deletion.

---

## Success Metrics

### Technical Metrics
- [ ] Page load time < 2 seconds
- [ ] Lambda cold start < 3 seconds  
- [ ] Perfect AI compatibility (curl/webfetch works)
- [ ] Zero JavaScript required for content access
- [ ] 100% uptime during migration

### Business Metrics
- [ ] No SEO ranking loss
- [ ] Maintain or improve Core Web Vitals
- [ ] Reduced hosting complexity
- [ ] Easier content management workflow

## Risk Mitigation

### High Risk: Domain Migration
- **Risk:** DNS propagation issues causing downtime
- **Mitigation:** Use temporary domain for testing, gradual DNS cutover

### Medium Risk: SEO Impact  
- **Risk:** Search ranking loss due to URL structure changes
- **Mitigation:** Maintain exact same URLs, implement proper redirects

### Low Risk: Lambda Cold Starts
- **Risk:** Slower initial page loads
- **Mitigation:** Keep Lambda warm, optimize binary size

## Timeline Estimate

- **Phase 1:** 5 hours (1 day)
- **Phase 2:** 15 hours (2-3 days)  
- **Phase 3:** 6 hours (1 day)
- **Phase 4:** 6 hours (1 day)

**Total:** ~32 hours (5-6 working days)

## Post-Migration Benefits

1. **Simplified Architecture:** Single Go binary vs Angular + Lambda
2. **Perfect AI Compatibility:** Server-rendered HTML accessible via curl
3. **Better Performance:** No JavaScript bundle, faster loading
4. **Easier Maintenance:** One codebase, one deployment
5. **Cost Reduction:** No Amplify costs, Lambda scales to zero
6. **Developer Experience:** Go development vs Angular complexity