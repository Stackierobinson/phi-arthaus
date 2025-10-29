interface StatItemProps {
  number: string
  label: string
  index: number
}

export default function StatItem({ number, label, index }: StatItemProps) {
  const colorClasses = [
    'text-warhol-pink text-shadow-basquiat',
    'text-basquiat-cyan text-shadow-warhol',
    'text-electric-purple text-shadow-purple',
  ]

  return (
    <div className="text-center p-8">
      <div className={`text-6xl font-bold mb-4 ${colorClasses[index % 3]}`}>
        {number}
      </div>
      <div className="text-sm tracking-widest uppercase text-gray-600">
        {label}
      </div>
    </div>
  )
}
