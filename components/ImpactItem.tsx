interface ImpactItemProps {
  title: string
  description: string
  index: number
}

export default function ImpactItem({ title, description, index }: ImpactItemProps) {
  const borderColors = [
    'border-basquiat-yellow',
    'border-warhol-pink',
    'border-basquiat-cyan',
    'border-kahlo-coral',
  ]

  return (
    <div className={`p-8 border-l-4 ${borderColors[index % 4]} transition-colors`}>
      <h3 className="text-2xl font-light mb-4 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
