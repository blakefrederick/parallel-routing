import wait from 'wait'

export default async function AreaPage() {
  const cityAreas = [
    'Mountains',
    'Ocean',
    'Grocery Store',
    'City Hall',
    'Uptown',
    'Old Town',
    "McDonald's",
    'Downtown',
    'University',
    'ParPark',
    'Museum',
    'Historic District',
    'Shopping Mall',
    'Beach',
    'Riverfront',
    'Cathedral',
    'Stadium',
    'Theatre District',
    'Train Station',
    'Residential Area',
  ]

  await wait(4000)
  return <div>{cityAreas[Math.floor(Math.random() * cityAreas.length)]}</div>
}
