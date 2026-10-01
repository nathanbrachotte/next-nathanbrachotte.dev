import Link from 'next/link'
import { cn } from '@/lib/utils'

export const MdxLink = (props) => {
  const href = props.href

  const className = cn(
    // Animation & Interaction
    'animate-text-gradient-background cursor-pointer',
    // Gradient & Colors
    'bg-gradient-to-r from-gradient-cyan to-gradient-blue',
    'bg-clip-text text-gradient-blue',
    // Text Decoration
    'decoration-gradient-blue decoration-[0.1em] underline-offset-2',
    // State & Transitions
    'transition-all',
    'visited:text-gradient-cyan visited:decoration-gradient-cyan',
    // 'visited:text-gradient-pink visited:decoration-gradient-pink',
    'hover:text-gradient-cyan hover:decoration-gradient-cyan',
  )

  if (href.startsWith('/')) {
    return (
      <Link href={href} alt={props.children} className={className} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    />
  )
}
