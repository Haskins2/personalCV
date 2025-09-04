"use client"

import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"

interface SmoothScrollButtonProps extends ButtonProps {
  href: string
  duration?: number
}

export function SmoothScrollButton({ href, duration = 800, children, ...props }: SmoothScrollButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const startPosition = window.scrollY
      const targetPosition = targetElement.offsetTop - 100
      const distance = targetPosition - startPosition
      const startTime = performance.now()
      
      function scrollStep(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Smooth easing function
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        
        const currentPosition = startPosition + (distance * easeOutCubic)
        window.scrollTo(0, currentPosition)
        
        if (progress < 1) {
          requestAnimationFrame(scrollStep)
        }
      }
      
      requestAnimationFrame(scrollStep)
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
