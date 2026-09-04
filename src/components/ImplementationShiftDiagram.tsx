const before = ['PAIN POINT', '내부 요청 / 외주', '요구사항 전달', '개발', '검수', '수정', '적용']
const now = ['PAIN POINT', 'AI와 구체화', 'MVP', '직접 사용', '정밀 수정', '실제 적용']

type ImplementationShiftDiagramProps = {
  compact?: boolean
}

export function ImplementationShiftDiagram({ compact = false }: ImplementationShiftDiagramProps) {
  return (
    <figure className={`implementation-shift${compact ? ' implementation-shift--compact' : ''}`}>
      <figcaption>
        <span>THE IMPLEMENTATION DISTANCE</span>
        <strong>
          문제 해결을 위한 제품 제작까지,
          <br />
          AI 덕분에 달라진 방법
        </strong>
      </figcaption>
      <div className="implementation-shift__lane implementation-shift__lane--before">
        <div className="implementation-shift__label">
          <span>BEFORE AI</span>
          <small>긴 구현 경로</small>
        </div>
        <ol>
          {before.map((item, index) => (
            <li key={item} className={index === 0 ? 'is-origin' : ''}>
              <span>{item}</span>
              {index < before.length - 1 && <i aria-hidden="true">→</i>}
            </li>
          ))}
        </ol>
      </div>
      <div className="implementation-shift__lane implementation-shift__lane--now">
        <div className="implementation-shift__label">
          <span>NOW</span>
          <small>빠른 실험과 MVP 제작</small>
        </div>
        <ol>
          {now.map((item, index) => (
            <li key={item} className={index === 0 ? 'is-origin' : index === now.length - 1 ? 'is-result' : ''}>
              <span>{item}</span>
              {index < now.length - 1 && <i aria-hidden="true">→</i>}
            </li>
          ))}
        </ol>
      </div>
      <p>
        AI는 실험과 내부 MVP의 문턱을 낮춥니다. 실제 운영 시스템에는 보안·아키텍처·운영·유지보수와
        전문 엔지니어링이 계속 필요합니다.
      </p>
    </figure>
  )
}
