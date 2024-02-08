import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        Click the parallel routes image to view a parallel route in real life
      </div>
      <Link href="/parallel">
        <Image
          src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes.png&w=3840&q=75&dpl=dpl_Wu51gxmpraHRzE83qFzGRzFVhSxU"
          alt="Parallel Routes"
          width={635}
          height={374}
        />
      </Link>
    </>
  )
}
