import { describe, it, expect } from 'vitest'
import { cn } from '../utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const isDisabled = false
    const result = cn('base', isActive && 'active', isDisabled && 'disabled')
    expect(result).toBe('base active')
  })

  it('handles undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles empty strings', () => {
    const result = cn('class1', '', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('merges Tailwind classes and removes conflicts', () => {
    // twMerge should handle conflicting Tailwind classes
    const result = cn('px-2', 'px-4')
    expect(result).toBe('px-4')
  })

  it('handles arrays of class names', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('handles object notation for conditional classes', () => {
    const result = cn({
      'base-class': true,
      'active-class': true,
      'disabled-class': false,
    })
    expect(result).toBe('base-class active-class')
  })

  it('handles complex Tailwind class merging', () => {
    // Background colors should merge correctly
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toBe('bg-blue-500')
  })

  it('preserves non-conflicting Tailwind classes', () => {
    const result = cn('text-sm', 'font-bold', 'text-center')
    expect(result).toBe('text-sm font-bold text-center')
  })

  it('handles mixed input types', () => {
    const result = cn(
      'base',
      ['array-class'],
      { 'object-class': true },
      true && 'conditional'
    )
    expect(result).toBe('base array-class object-class conditional')
  })

  it('returns empty string for no input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('returns empty string for all falsy inputs', () => {
    const result = cn(false, null, undefined, '')
    expect(result).toBe('')
  })
})
