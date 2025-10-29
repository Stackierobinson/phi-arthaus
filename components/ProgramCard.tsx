interface ProgramCardProps {
  title: string
  description: string
  index: number
}

export default function ProgramCard({ title, description, index }: ProgramCardProps) {
  const borderColors = [
    'before:bg-basquiat-yellow',
    'before:bg-warhol-pink',
    'before:bg-basquiat-cyan',
    'before:bg-warhol-orange',
    'before:bg-kahlo-teal',
    'before:bg-electric-purple',
  ]

  return (
    <div className={`
      bg-white border border-gray-200 p-12
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
      relative overflow-hidden
      before:absolute before:top-0 before:left-0 before:w-1 before:h-0
      before:transition-all before:duration-300
      hover:before:h-full
      ${borderColors[index % 6]}
    `}>
      <h3 className="text-3xl font-light tracking-wide mb-6">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
