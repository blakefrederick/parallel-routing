export default function ParallelSecretPage() {
  const travelSecrets = [
    'Travel during offseason',
    'Book flights on Tuesdays for the best deals',
    'Stay in local apartments instead of hotels',
    'Learn basic phrases in the local language',
    'Eat where the locals eat',
    'Pack a multi-socket power adapter',
    'Use public transportation',
    'Carry a physical map',
    'Travel light',
    'Keep digital copies of important documents',
    'Visit local markets',
    "Don't overplan, leave room for spontaneity",
    'Use a money belt to keep cash safe',
    'Get travel insurance',
    'Stay hydrated and always carry a water bottle',
    'Try local street food',
    'Visit museums on free entrance days',
    'Take lots of photos, but also enjoy the moment',
    'Check for local festivals or events',
    'Respect local customs and traditions',
  ]
  return (
    <div>
      Oracle&apos;s secret:{' '}
      {travelSecrets[Math.floor(Math.random() * travelSecrets.length)]}
    </div>
  )
}
