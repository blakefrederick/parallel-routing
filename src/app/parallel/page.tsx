import wait from 'wait'

export default async function ParallelPage() {
  await wait(1000)
  return <div>Parallel Realm</div>
}
