import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads correctly with hero section visible', async ({ page }) => {
    await page.goto('/')

    // Check page title
    await expect(page).toHaveTitle(/Stephen Haskins/i)

    // Hero section should be visible
    await expect(page.getByRole('heading', { name: /Stephen Haskins/i })).toBeVisible()

    // Subtitle/description should be visible (use first match to avoid strict mode violation)
    await expect(page.getByText('Fifth year Computer Engineering student').first()).toBeVisible()

    // Navigation buttons should be present
    await expect(page.getByRole('link', { name: /View Projects/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /About Me/i })).toBeVisible()

    // Profile image should be present
    await expect(page.getByAltText('Headshot')).toBeVisible()
  })

  test('about section is accessible via anchor link', async ({ page }) => {
    await page.goto('/')

    // Click the "About Me" button
    await page.getByRole('link', { name: /About Me/i }).click()

    // The about section should be visible (check for the "About Me" heading)
    await expect(page.getByRole('heading', { name: /About Me/i })).toBeVisible()
  })
})

test.describe('Projects Page Navigation', () => {
  test('navigates to projects page and displays project cards', async ({ page }) => {
    await page.goto('/')

    // Click the "View Projects" button
    await page.getByRole('link', { name: /View Projects/i }).click()

    // Wait for navigation
    await expect(page).toHaveURL('/projects')

    // Check page heading
    await expect(page.getByRole('heading', { name: /My Projects/i })).toBeVisible()

    // Project cards should be rendered (check for at least one project)
    // Looking for "View Project" buttons which appear on each card
    const projectButtons = page.getByRole('link', { name: /View Project/i })
    await expect(projectButtons.first()).toBeVisible()

    // Verify multiple projects are displayed
    const projectCount = await projectButtons.count()
    expect(projectCount).toBeGreaterThanOrEqual(3)

    // Check that GitHub link is present
    await expect(page.getByRole('link', { name: /GitHub/i })).toBeVisible()
  })

  test('breadcrumb navigation works correctly', async ({ page }) => {
    await page.goto('/projects')

    // Breadcrumb should show "Home" link
    const homeLink = page.getByRole('navigation', { name: 'Breadcrumb' })
      .getByRole('link', { name: 'Home' })
    await expect(homeLink).toBeVisible()

    // Click Home to navigate back
    await homeLink.click()

    // Should be back on homepage
    await expect(page).toHaveURL('/')
  })
})

test.describe('Theme Toggle', () => {
  test('theme toggle persists across page navigation', async ({ page }) => {
    await page.goto('/')

    // Find theme toggle button (it's in a fixed position)
    const themeToggle = page.locator('button').filter({
      has: page.locator('svg'),
    }).first()

    // Wait for the page to be fully hydrated
    await expect(themeToggle).toBeVisible()

    // Get initial theme state by checking if dark mode class is present
    const htmlElement = page.locator('html')
    const initialIsDark = await htmlElement.evaluate(el => el.classList.contains('dark'))

    // Click to toggle theme
    await themeToggle.click()

    // Wait for theme to change
    await page.waitForTimeout(100)

    // Verify theme changed
    const afterToggleIsDark = await htmlElement.evaluate(el => el.classList.contains('dark'))
    expect(afterToggleIsDark).not.toBe(initialIsDark)

    // Navigate to projects page
    await page.getByRole('link', { name: /View Projects/i }).click()
    await expect(page).toHaveURL('/projects')

    // Theme should persist after navigation
    const afterNavigationIsDark = await htmlElement.evaluate(el => el.classList.contains('dark'))
    expect(afterNavigationIsDark).toBe(afterToggleIsDark)
  })

  test('theme toggle switches between light and dark mode', async ({ page }) => {
    await page.goto('/')

    const themeToggle = page.locator('button').filter({
      has: page.locator('svg'),
    }).first()

    await expect(themeToggle).toBeVisible()

    // Toggle theme multiple times to verify bidirectional switching
    const htmlElement = page.locator('html')

    // First toggle
    await themeToggle.click()
    await page.waitForTimeout(100)
    const firstState = await htmlElement.evaluate(el => el.classList.contains('dark'))

    // Second toggle (should return to original state)
    await themeToggle.click()
    await page.waitForTimeout(100)
    const secondState = await htmlElement.evaluate(el => el.classList.contains('dark'))

    expect(secondState).not.toBe(firstState)
  })
})

test.describe('Responsive Design', () => {
  test('mobile navigation works correctly', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 })

    await page.goto('/')

    // Hero content should still be visible
    await expect(page.getByRole('heading', { name: /Stephen Haskins/i })).toBeVisible()

    // Navigation buttons should still work
    await page.getByRole('link', { name: /View Projects/i }).click()
    await expect(page).toHaveURL('/projects')
  })
})
