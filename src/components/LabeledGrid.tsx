import { Reveal } from './Reveal'

export type LabeledItem = { en: string; label: string; desc: string }

type LabeledGridProps = {
  items: LabeledItem[]
  numbered?: boolean
  columns?: number
}

/**
 * 하리라인 그리드로 라벨/설명 항목을 나열한다(업무지시 6요소, 솔루션 타입 등).
 * numbered=true면 en 자리에 01·02… 번호를 accent로 표시한다.
 */
export function LabeledGrid({ items, numbered = false, columns }: LabeledGridProps) {
  return (
    <div
      className={`labeled-grid${numbered ? ' labeled-grid--numbered' : ''}`}
      style={columns ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` } : undefined}
    >
      {items.map((item, index) => (
        <Reveal key={item.label} delay={(index % 3) * 60}>
          <span className="labeled-grid__en">{numbered ? String(index + 1).padStart(2, '0') : item.en}</span>
          <strong className="labeled-grid__label">{item.label}</strong>
          <span className="labeled-grid__desc">{item.desc}</span>
        </Reveal>
      ))}
    </div>
  )
}
