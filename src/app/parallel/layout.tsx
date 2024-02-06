import wait from 'wait'
import { ReactNode } from 'react'

export default function ParallelLayout({
  children,
  city,
  area,
}: {
  children: ReactNode
  city: ReactNode
  area: ReactNode
}) {
  return (
    <>
      <nav className="font-bold my-4">Where to travel</nav>
      <main>{children}</main>
      {city}
      {area}
    </>
  )
}
