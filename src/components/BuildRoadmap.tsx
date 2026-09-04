import { Reveal } from './Reveal'

const stages = [
  ['과제 선택', 'STEP 1–2', '#step-1'],
  ['1 PAGE BLUEPRINT', 'W01 · GATE', '#blueprint'],
  ['PRD / SPEC KIT', 'W02–W03', '#week-02'],
  ['BUILD', 'W04–W06', '#week-04'],
  ['Prototype / Agent / Automation / Tool', 'W05–W07', '#week-05'],
  ['실제 사용 / Feedback', 'W07–W08', '#week-07'],
]

const buildTips = [
  ['문제 정의 → PRD / SPEC KIT', 'tip-w02-prd'],
  ['디자인 전달 → Reference / Screenshot Feedback', 'tip-w04-reference'],
  ['작업 장기화 → GitHub / Checkpoint / Hand-off', 'tip-w05-handoff'],
  ['외부 데이터 연결 → API / MCP', 'tip-w06-mcp'],
  ['AI 일관성 유지 → Rule / Harness', 'tip-w05-rules'],
  ['반복 개선 → Loop', 'tip-w07-loop'],
  ['배포 → Deploy', 'tip-w08-deploy'],
]

/** 과제 선택 → BLUEPRINT → PRD / SPEC KIT → BUILD → 결과물 → 실제 사용. TIP은 필요한 순간에만. */
export function BuildRoadmap() {
  return (
    <div className="build-roadmap">
      <Reveal className="build-roadmap__head">
        <p className="step-eyebrow">BUILD ROADMAP</p>
      </Reveal>
      <ol className="build-roadmap__stages">
        {stages.map(([label, when, href], index) => (
          <Reveal as="li" delay={index * 110} key={label}>
            <a href={href}>
              <span>{when}</span>
              <strong>{label}</strong>
            </a>
            {index < stages.length - 1 && <i aria-hidden="true">→</i>}
          </Reveal>
        ))}
      </ol>
      <Reveal className="build-roadmap__tips" delay={500}>
        <p>TIP · DEEP DIVE는 필요한 순간에 나옵니다.</p>
        <div>
          {buildTips.map(([label, id]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
