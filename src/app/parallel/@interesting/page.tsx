import wait from 'wait'

export default async function InterestingPage() {
  await wait(4000)
  return <div>This is such interesting content, just so interesting.</div>
}
