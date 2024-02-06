import wait from 'wait'
import { ReactNode, Suspense } from 'react'

export default function ParallelLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="font-bold my-4">Where to travel</nav>
      <main>{children}</main>
      <Suspense fallback={<div>Loading cool content...</div>}>
        <Cool />
      </Suspense>
      <Suspense fallback={<div>Loading interesting content...</div>}>
        <Interesting />
      </Suspense>
    </>
  )
}

async function Cool() {
  await wait(2000)
  return <div>Woo wow content</div>
}

async function Interesting() {
  await wait(4000)
  return <div>Intriguing, quite the content</div>
}
