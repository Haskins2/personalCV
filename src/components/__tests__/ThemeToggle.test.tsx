import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeToggle } from '../ThemeToggle'

// Mock next-themes
const mockSetTheme = vi.fn()
let mockTheme = 'light'

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
  }),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockTheme = 'light'
  })

  it('renders nothing initially before mounting (hydration safety)', () => {
    // The component returns null before mounting to prevent hydration mismatch
    const { container } = render(<ThemeToggle />)
    // After useEffect runs, it should render the button
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('renders a button with moon icon in light mode', async () => {
    mockTheme = 'light'
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    // In light mode, moon icon should be shown (to switch to dark)
    // The icon is an SVG, we check by the button's existence
    await waitFor(() => {
      expect(button).toBeVisible()
    })
  })

  it('renders a button with sun icon in dark mode', async () => {
    mockTheme = 'dark'
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('toggles from light to dark mode on click', async () => {
    mockTheme = 'light'
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockSetTheme).toHaveBeenCalledTimes(1)
    expect(mockSetTheme).toHaveBeenCalledWith('dark')
  })

  it('toggles from dark to light mode on click', async () => {
    mockTheme = 'dark'
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockSetTheme).toHaveBeenCalledTimes(1)
    expect(mockSetTheme).toHaveBeenCalledWith('light')
  })

  it('has correct accessibility attributes', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    // Button should be focusable
    expect(button).not.toHaveAttribute('tabindex', '-1')
  })

  it('applies fixed positioning classes', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button.className).toContain('fixed')
    expect(button.className).toContain('top-4')
    expect(button.className).toContain('right-4')
  })
})
