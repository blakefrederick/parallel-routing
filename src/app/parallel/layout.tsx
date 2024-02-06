import wait from 'wait'
import { ReactNode } from 'react'

export default function ParallelLayout({
  children,
  cool,
  interesting,
}: {
  children: ReactNode
  cool: ReactNode
  interesting: ReactNode
}) {
  return (
    <>
      <nav className="font-bold my-4">Where to travel</nav>
      <main>{children}</main>
      {cool}
      {interesting}
    </>
  )
}
