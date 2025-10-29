'use client'

interface DonationTierProps {
  amount: string
  name: string
  benefits: string[]
  index: number
  onSelect: (amount: string) => void
}

export default function DonationTier({ amount, name, benefits, index, onSelect }: DonationTierProps) {
  const borderColors = [
    'border-basquiat-yellow hover:bg-basquiat-yellow',
    'border-warhol-pink hover:bg-warhol-pink hover:text-white',
    'border-electric-purple hover:bg-electric-purple hover:text-white',
  ]

  return (
    <div className={`
      bg-white border-4 border-gray-900 p-12 pt-12 text-center
      transition-all duration-300 cursor-pointer
      hover:-translate-y-4 hover:shadow-warhol
      ${borderColors[index % 3]}
      group
    `}
    onClick={() => onSelect(amount)}
    >
      <div className="text-5xl font-light mb-4">
        {amount}
      </div>
      <div className="text-xl tracking-widest uppercase mb-6">
        {name}
      </div>
      <ul className="list-none text-left mt-8 space-y-4">
        {benefits.map((benefit, i) => (
          <li
            key={i}
            className="py-2 border-b border-gray-200 group-hover:border-opacity-30 transition-all"
          >
            {benefit}
          </li>
        ))}
      </ul>
      <button className="mt-8 bg-gray-900 text-white px-8 py-4 tracking-widest uppercase text-sm hover:bg-gray-700 transition-colors w-full">
        Select Amount
      </button>
    </div>
  )
}
