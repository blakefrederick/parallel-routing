'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ParallelLayout({
  children,
  city,
  area,
}: {
  children: ReactNode
  city: ReactNode
  area: ReactNode
}) {
  const pathname = usePathname()
  const linkText = pathname.includes('/parallel/secret') ? '' : 'see secrets'
  const linkHref = pathname.includes('/parallel/secret')
    ? '/parallel'
    : '/parallel/secret'

  return (
    <>
      <nav className="font-bold my-4">Where to travel</nav>
      <main>{children}</main>
      {city}
      {area}
      <p className="my-10 text-xs">
        <Link href={linkHref}>{linkText}</Link>
      </p>
    </>
  )
}
