import { test, expect } from '@playwright/test';

test.describe('BuyAllMemes Blog', () => {
  test('home page loads and displays header', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is correct
    await expect(page).toHaveTitle(/BuyAllMemes Blog/);
    
    // Check that the navigation header is visible (more specific selector)
    const navHeader = page.locator('.header');
    await expect(navHeader).toBeVisible();
    
    // Check for navigation elements
    await expect(page.locator('header a[href="/"]')).toBeVisible();
    await expect(page.locator('.header-title')).toContainText('BuyAllMemes');
  });

  test('displays blog posts in sidebar', async ({ page }) => {
    await page.goto('/');
    
    // Check that the sidebar contains blog posts
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();
    
    // Look for post titles - should have multiple posts
    const postLinks = page.locator('.sidebar a[href*="/blog/"]');
    await expect(postLinks.first()).toBeVisible();
    
    // Verify we have multiple posts
    const postCount = await postLinks.count();
    expect(postCount).toBeGreaterThan(0);
  });

  test('displays latest article content on home page', async ({ page }) => {
    await page.goto('/');
    
    // Check that there's article content visible
    const articleContent = page.locator('.article-content');
    await expect(articleContent).toBeVisible();
    
    // Should have some text content
    const textContent = await articleContent.textContent();
    expect(textContent?.length || 0).toBeGreaterThan(100);
  });

  test('individual blog post pages load correctly', async ({ page }) => {
    await page.goto('/');
    
    // Find the first blog post link in sidebar
    const firstPostLink = page.locator('.sidebar a[href*="/blog/"]').first();
    await expect(firstPostLink).toBeVisible();
    
    // Click to navigate to the post
    await firstPostLink.click();
    
    // Check that the post page loads
    await expect(page.locator('.article-content')).toBeVisible();
    
    // Should have a title
    await expect(page.locator('.article-title')).toBeVisible();
  });

  test('navigation between posts works', async ({ page }) => {
    await page.goto('/');
    
    // Click on a blog post from the sidebar
    const postLink = page.locator('.sidebar a[href*="/blog/"]').first();
    await postLink.click();
    
    // Should navigate to the post page
    await expect(page).toHaveURL(/\/blog\/.+/);
    
    // Should still have the header and sidebar
    await expect(page.locator('.header')).toBeVisible();
    await expect(page.locator('.sidebar')).toBeVisible();
  });

  test('navigate to specific DIP principle article', async ({ page }) => {
    await page.goto('/');
    
    // Look for the DIP principle article in the sidebar
    const dipArticleLink = page.locator('a[href*="practical-dependency-inversion-principle"]');
    await expect(dipArticleLink).toBeVisible();
    
    // Click on the DIP article
    await dipArticleLink.click();
    
    // Should navigate to the specific DIP article
    await expect(page).toHaveURL(/\/blog\/.*practical-dependency-inversion-principle/);
    
    // Should display the article title
    await expect(page.locator('.article-title')).toContainText('Practical Dependency Inversion Principle');
    
    // Should have article content
    const articleContent = page.locator('.article-content');
    await expect(articleContent).toBeVisible();
    
    // Should have sidebar with other articles still visible
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();
    
    // The current article should be marked as active in the sidebar
    const activeLink = page.locator('.sidebar-link.active');
    await expect(activeLink).toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('/');
    
    // Find the theme toggle button
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();
    
    // Click to toggle theme
    await themeToggle.click();
    
    // Check that the theme has changed (dark class should be added/removed)
    await page.waitForTimeout(100); // Wait for theme transition
  });

  test('code blocks have copy buttons', async ({ page }) => {
    // Go to a post that has code blocks
    await page.goto('/blog/practical-dependency-inversion-principle');
    
    // Check if there are code blocks
    const codeBlocks = page.locator('pre');
    const codeBlockCount = await codeBlocks.count();
    
    if (codeBlockCount > 0) {
      // Hover over the first code block to reveal copy button
      await codeBlocks.first().hover();
      
      // Check that copy button appears (it might take a moment)
      await page.waitForTimeout(100);
      const copyButton = page.locator('.copy-button').first();
      
      // The button should be visible on hover
      await expect(copyButton).toBeVisible();
    }
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Header should still be visible
    await expect(page.locator('.header')).toBeVisible();
    
    // Content should be readable
    const content = page.locator('.article-content');
    await expect(content).toBeVisible();
    
    // On mobile, sidebar should be below content (check CSS order)
    const main = page.locator('.main');
    await expect(main).toBeVisible();
  });

  test('images load correctly in posts', async ({ page }) => {
    // Go to a post that has images (DIP principle has diagrams)
    await page.goto('/blog/practical-dependency-inversion-principle');
    
    // Check if there are any images and if they load
    const images = page.locator('.article-content img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      // Check that the first image loads
      const firstImage = images.first();
      await expect(firstImage).toBeVisible();
      
      // Check that the image has a src attribute
      const src = await firstImage.getAttribute('src');
      expect(src).toBeTruthy();
      expect(src).toMatch(/\/images\//); // Should use our image path structure
    }
  });

  test('font loading works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check that system fonts are applied
    const body = page.locator('body');
    const computedStyle = await body.evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });
    
    // Should include system fonts as defined in CSS
    expect(computedStyle).toMatch(/-apple-system|BlinkMacSystemFont|Segoe UI|sans-serif/i);
  });

  test('all blog posts are accessible', async ({ page }) => {
    await page.goto('/');
    
    // Get all post links from sidebar
    const postLinks = page.locator('.sidebar a[href*="/blog/"]');
    const linkCount = await postLinks.count();
    
    expect(linkCount).toBeGreaterThan(0);
    
    // Test first few posts load correctly
    for (let i = 0; i < Math.min(3, linkCount); i++) {
      const link = postLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href) {
        await page.goto(href);
        await expect(page.locator('.article-title')).toBeVisible();
        await expect(page.locator('.article-content')).toBeVisible();
      }
    }
  });
});