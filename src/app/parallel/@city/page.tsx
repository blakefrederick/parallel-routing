import wait from 'wait'

export default async function CityPage() {
  const cities = [
    'New York',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'Berlin',
    'Toronto',
    'Hong Kong',
    'Singapore',
    'Dubai',
    'Amsterdam',
    'Los Angeles',
    'Rome',
    'Chicago',
    'Barcelona',
    'Madrid',
    'Moscow',
    'Shanghai',
    'Mumbai',
    'Cape Town',
  ]

  await wait(2000)
  return <div>{cities[Math.floor(Math.random() * cities.length)]}</div>
}
