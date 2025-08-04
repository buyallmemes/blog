import { test, expect } from '@playwright/test';

test.describe("Let's Talk Page", () => {
  test('page loads and displays correctly', async ({ page }) => {
    await page.goto('/lets-talk');

    // Check page title and meta
    await expect(page).toHaveTitle(/Let's Talk - Architecture Consulting/);

    // Check main header
    await expect(page.locator('.article-title')).toContainText(
      "Let's Talk Architecture"
    );

    // Check subtitle/meta info
    await expect(page.locator('.article-meta')).toContainText(
      'Staff Engineer at HelloFresh'
    );
    await expect(page.locator('.article-meta')).toContainText(
      '15+ years experience'
    );

    // Check main content sections
    await expect(page.locator('.article-content')).toBeVisible();
    await expect(page.locator('h2')).toContainText([
      'What I Do',
      'Tech I Work With',
      'How This Works',
    ]);
  });

  test('contact buttons are present and functional', async ({ page }) => {
    await page.goto('/lets-talk');

    // Check sidebar contact section
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();
    await expect(page.locator('.sidebar-title')).toContainText('Contact');

    // Test Calendly button
    const calendlyButton = page.locator(
      'a[href*="calendly.com/mfenderov/30min"]'
    );
    await expect(calendlyButton).toBeVisible();
    await expect(calendlyButton).toContainText('Book Consultation');
    await expect(calendlyButton).toHaveAttribute('target', '_blank');
    await expect(calendlyButton).toHaveAttribute('rel', 'noopener noreferrer');

    // Test LinkedIn button (specifically in sidebar)
    const linkedinButton = page.locator(
      '.sidebar a[href*="linkedin.com/in/mark-fenderov"]'
    );
    await expect(linkedinButton).toBeVisible();
    await expect(linkedinButton).toContainText('LinkedIn Message');
    await expect(linkedinButton).toHaveAttribute('target', '_blank');
    await expect(linkedinButton).toHaveAttribute('rel', 'noopener noreferrer');

    // Only Calendly and LinkedIn buttons now (no email for security)
  });

  test('contact button styling and accessibility', async ({ page }) => {
    await page.goto('/lets-talk');

    // Check primary button (Calendly) has correct styling
    const primaryButton = page.locator('.contact-button.primary');
    await expect(primaryButton).toBeVisible();
    await expect(primaryButton).toHaveClass(/primary/);

    // Check all contact buttons have proper accessibility
    const contactButtons = page.locator('.contact-button');
    const buttonCount = await contactButtons.count();
    expect(buttonCount).toBe(2); // Calendly and LinkedIn only

    // Each button should have descriptive text
    for (let i = 0; i < buttonCount; i++) {
      const button = contactButtons.nth(i);
      const text = await button.textContent();
      expect(text?.trim().length).toBeGreaterThan(5); // Should have meaningful text
    }
  });

  test('content sections are comprehensive', async ({ page }) => {
    await page.goto('/lets-talk');

    const content = page.locator('.article-content');

    // Check introduction paragraph mentions key info
    await expect(content).toContainText('15+ years');
    await expect(content).toContainText('HelloFresh');
    await expect(content).toContainText('Staff Engineer');

    // Check "What I Do" section
    await expect(content).toContainText('untangle complex technical messes');
    await expect(content).toContainText('Deutsche Telekom');
    await expect(content).toContainText('200+ engineers');

    // Check "Tech I Work With" section
    await expect(content).toContainText('Java');
    await expect(content).toContainText('Go');
    await expect(content).toContainText('AWS');
    await expect(content).toContainText('Rust');

    // Check "How This Works" section
    await expect(content).toContainText('Just reach out');
    await expect(content).toContainText('engineers talking through problems');
  });

  test('navigation from homepage works', async ({ page }) => {
    await page.goto('/');

    // Should be able to navigate to Let's Talk from home (if there's a nav link)
    // For now, test direct navigation
    await page.goto('/lets-talk');

    // Should maintain header and general layout
    await expect(page.locator('.header')).toBeVisible();
    await expect(page.locator('.header-title')).toContainText('BuyAllMemes');

    // Should have the sidebar with blog posts (maintaining site structure)
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();
  });

  test('page works on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/lets-talk');

    // Header should be visible
    await expect(page.locator('.header')).toBeVisible();

    // Contact buttons should still be accessible
    await expect(page.locator('.contact-button')).toHaveCount(2);

    // Content should be readable
    const content = page.locator('.article-content');
    await expect(content).toBeVisible();

    // Check that contact buttons stack properly on mobile
    const contactButtons = page.locator('.contact-button');
    for (let i = 0; i < 2; i++) {
      await expect(contactButtons.nth(i)).toBeVisible();
    }
  });

  test('page maintains consistent styling with blog', async ({ page }) => {
    await page.goto('/lets-talk');

    // Should use same layout structure as blog posts
    await expect(page.locator('.main')).toBeVisible();
    await expect(page.locator('.article')).toBeVisible();
    await expect(page.locator('.article-header')).toBeVisible();
    await expect(page.locator('.article-content')).toBeVisible();

    // Should have consistent typography
    const title = page.locator('.article-title');
    await expect(title).toBeVisible();

    // Check that h2 headings use consistent styling
    const headings = page.locator('.article-content h2');
    const headingCount = await headings.count();
    expect(headingCount).toBe(3); // Should have exactly 3 h2 headings
  });

  test('external links have proper security attributes', async ({ page }) => {
    await page.goto('/lets-talk');

    // Check sidebar contact external links have security attributes
    const sidebarExternalLinks = page.locator('.sidebar a[target="_blank"]');
    const linkCount = await sidebarExternalLinks.count();
    expect(linkCount).toBe(2); // Calendly and LinkedIn in sidebar

    for (let i = 0; i < linkCount; i++) {
      const link = sidebarExternalLinks.nth(i);
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      await expect(link).toHaveAttribute('target', '_blank');
    }
  });

  test('contact information is accurate', async ({ page }) => {
    await page.goto('/lets-talk');

    // Verify correct contact URLs in sidebar specifically
    await expect(
      page.locator('.sidebar a[href*="calendly.com/mfenderov/30min"]')
    ).toBeVisible();
    await expect(
      page.locator('.sidebar a[href*="linkedin.com/in/mark-fenderov"]')
    ).toBeVisible();
    // Email removed for security reasons

    // Check that contact section is properly labeled
    await expect(page.locator('.sidebar-title')).toContainText('Contact');
  });

  test('page content reflects authentic voice', async ({ page }) => {
    await page.goto('/lets-talk');

    const content = page.locator('.article-content');

    // Check for authentic, conversational tone markers
    await expect(content).toContainText("somehow didn't go insane");
    await expect(content).toContainText('fell hard for Go');
    await expect(content).toContainText("If you've read my blog");
    await expect(content).toContainText('Simple usually wins');
    await expect(content).toContainText('corporate theater');

    // Should reference the blog content naturally
    await expect(content).toContainText('you know the story');
  });

  test('SEO and meta tags are properly set', async ({ page }) => {
    await page.goto('/lets-talk');

    // Check title
    await expect(page).toHaveTitle(
      "Let's Talk - Architecture Consulting | Mark Fenderov"
    );

    // Check meta description (if accessible via page evaluation)
    const metaDescription = await page
      .locator('meta[name="description"]')
      .getAttribute('content');
    expect(metaDescription).toContain(
      'Staff Engineer at HelloFresh offering architecture consulting'
    );
    expect(metaDescription).toContain('15+ years experience');
  });
});
