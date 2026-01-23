import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '../Breadcrumb'

describe('Breadcrumb', () => {
  it('renders a single breadcrumb item without link', () => {
    const items = [{ label: 'Home' }]
    render(<Breadcrumb items={items} />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    // No link should be rendered for items without href
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders a single breadcrumb item with link', () => {
    const items = [{ label: 'Home', href: '/' }]
    render(<Breadcrumb items={items} />)

    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('renders multiple breadcrumb items with separators', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Machine Learning' },
    ]
    render(<Breadcrumb items={items} />)

    // Check all labels are rendered
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Machine Learning')).toBeInTheDocument()

    // Check links are rendered for items with href
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')

    // Last item should not be a link
    const lastItem = screen.getByText('Machine Learning')
    expect(lastItem.tagName).toBe('SPAN')

    // Check separators are rendered (should be 2 separators for 3 items)
    const separators = screen.getAllByText('/')
    expect(separators).toHaveLength(2)
  })

  it('renders with proper navigation landmark', () => {
    const items = [{ label: 'Home', href: '/' }]
    render(<Breadcrumb items={items} />)

    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' })
    expect(nav).toBeInTheDocument()
  })

  it('renders items in an ordered list', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Projects' },
    ]
    render(<Breadcrumb items={items} />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
  })

  it('renders empty breadcrumb when no items provided', () => {
    render(<Breadcrumb items={[]} />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  it('applies correct styling classes to links', () => {
    const items = [{ label: 'Home', href: '/' }]
    render(<Breadcrumb items={items} />)

    const link = screen.getByRole('link', { name: 'Home' })
    expect(link.className).toContain('hover:underline')
  })

  it('applies correct styling classes to non-link items', () => {
    const items = [{ label: 'Current Page' }]
    render(<Breadcrumb items={items} />)

    const span = screen.getByText('Current Page')
    expect(span.className).toContain('text-gray-500')
  })

  it('handles special characters in labels', () => {
    const items = [
      { label: 'Home & About', href: '/' },
      { label: "Projects's List" },
    ]
    render(<Breadcrumb items={items} />)

    expect(screen.getByText('Home & About')).toBeInTheDocument()
    expect(screen.getByText("Projects's List")).toBeInTheDocument()
  })
})
