import { ReactNode } from 'react'
import Link from 'next/link'

export default function ParallelLayout({
  children,
  city,
  area,
}: {
  children: ReactNode
  city: ReactNode
  area: ReactNode
}) {
  const linkText = 'see secrets'
  const linkHref = '/parallel/secret'

  return (
    <>
      <nav className="font-bold my-4">Where to</nav>
      <main>{children}</main>
      {city}
      {area}
      <p className="my-10 text-xs">
        <Link href={linkHref}>{linkText}</Link>
      </p>
    </>
  )
}
