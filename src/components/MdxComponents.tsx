import type { ComponentPropsWithoutRef } from 'react'
import { Callout, KeyIdea, TryTonight, SeekHelp } from './Callout'

type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>
type StrongProps = ComponentPropsWithoutRef<'strong'>

export const mdxComponents = {
  h1: ({ children, ...props }: HeadingProps) => (
    <h1 className="text-3xl font-bold text-foreground mb-4 mt-2" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2 className="text-2xl font-semibold text-foreground mb-3 mt-8 scroll-mt-20" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3 className="text-xl font-semibold text-foreground mb-2 mt-6" {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: ParagraphProps) => (
    <p className="text-foreground/90 leading-relaxed mb-4" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: ListProps) => (
    <ul className="list-disc list-inside space-y-1.5 mb-4 text-foreground/90" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside space-y-1.5 mb-4 text-foreground/90" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: ListItemProps) => (
    <li className="leading-relaxed" {...props}>{children}</li>
  ),
  strong: ({ children, ...props }: StrongProps) => (
    <strong className="font-semibold text-foreground" {...props}>{children}</strong>
  ),
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote className="border-l-4 border-primary/30 pl-4 my-4 text-muted-foreground italic" {...props}>
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }: AnchorProps) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-primary hover:underline"
      {...props}
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-8 border-border" />,
  Callout,
  KeyIdea,
  TryTonight,
  SeekHelp,
} as const
