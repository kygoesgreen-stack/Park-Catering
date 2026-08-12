'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/animations'

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <FadeIn>
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 bg-charcoal-900">
        <ol className="section-container flex flex-wrap items-center gap-2 text-sm font-sans">
          <li>
            <Link href="/" className="text-cream-200/50 hover:text-cream-50 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-cream-200/30">/</span>
              {item.href ? (
                <Link href={item.href} className="text-cream-200/50 hover:text-cream-50 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-cream-200/80">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </FadeIn>
  )
}
