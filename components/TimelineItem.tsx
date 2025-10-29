interface TimelineItemProps {
  date: string
  title: string
  description: string
  index: number
  isActive?: boolean
}

export default function TimelineItem({ date, title, description, index, isActive = false }: TimelineItemProps) {
  const markerColors = [
    'border-basquiat-yellow',
    'border-warhol-pink',
    'border-basquiat-cyan',
    'border-electric-purple',
  ]

  const isEven = index % 2 === 1

  return (
    <div className={`
      flex mb-12 relative
      ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
      transition-opacity duration-300
      ${isEven ? 'flex-row-reverse' : 'flex-row'}
    `}>
      {/* Timeline Marker */}
      <div className={`
        absolute left-1/2 top-0 -translate-x-1/2
        w-5 h-5 rounded-full bg-white z-10
        border-4 transition-all duration-300
        ${markerColors[index % 4]}
        ${isActive && index === 1 ? 'w-8 h-8 shadow-[0_0_0_8px_rgba(255,20,147,0.2)]' : ''}
      `} />

      {/* Content */}
      <div className={`
        w-5/12 p-8 bg-white border-2 border-gray-200
        transition-all duration-300
        hover:border-warhol-pink hover:shadow-[5px_5px_0px_rgba(255,20,147,0.2)]
      `}>
        <div className="text-sm tracking-widest uppercase text-warhol-pink font-bold mb-2">
          {date}
        </div>
        <h3 className="text-3xl font-light mb-4 tracking-wide">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
