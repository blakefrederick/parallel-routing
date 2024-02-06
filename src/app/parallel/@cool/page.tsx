import wait from 'wait'

export default async function CoolPage() {
  await wait(2000)
  return <div>Woo wow content</div>
}
