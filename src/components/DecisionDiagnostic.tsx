import { useState } from 'react'
import { Reveal } from './Reveal'

type SolutionKey = 'customai' | 'webapp' | 'automation' | 'agent'

type QuestionId =
  | 'needsScreen'
  | 'conversational'
  | 'fixedSequence'
  | 'aiDecides'
  | 'multiTool'
  | 'internalData'
  | 'multiUser'

const questions: { id: QuestionId; text: string; hint: string }[] = [
  { id: 'conversational', text: '핵심이 "질문하고 답을 받는 대화"인가?', hint: '문서 질의 · 아이디어 · 초안 검토처럼 대화가 중심' },
  { id: 'needsScreen', text: '사람들이 보고 조작할 전용 화면(대시보드·입력폼)이 필요한가?', hint: '데이터를 표시하고 입력·수정하는 인터페이스' },
  { id: 'fixedSequence', text: '정해진 순서로 반복되는 작업인가?', hint: '트리거 → 단계 → 결과가 대체로 예측 가능' },
  { id: 'aiDecides', text: 'AI가 상황을 보고 다음 행동을 스스로 판단해야 하는가?', hint: '경로가 고정되지 않고 그때그때 달라짐' },
  { id: 'multiTool', text: '여러 도구·데이터 소스를 오가야 하는가?', hint: '검색 · 파일 · 시스템을 조합' },
  { id: 'internalData', text: '사내 데이터·시스템 연결이 필요한가?', hint: '승인·권한·거버넌스가 따라온다' },
  { id: 'multiUser', text: '여러 사람이 함께 사용할 것인가?', hint: '팀·조직 단위 사용' },
]

const results: Record<SolutionKey, { name: string; korean: string; tools: string; first: string }> = {
  customai: {
    name: 'Custom AI',
    korean: '맞춤형 AI 어시스턴트',
    tools: 'ChatGPT Project · Claude Project · Gemini Gem',
    first: '자주 쓰는 지시와 참고 문서를 넣은 Project/Gem을 하나 만들고, 실제 업무 질문 3개를 시켜본다.',
  },
  webapp: {
    name: 'Web / App',
    korean: '전용 화면이 있는 웹·앱',
    tools: 'Claude Design · Google AI Studio',
    first: '핵심 화면 1개를 샘플 데이터로 만들어 업무 흐름부터 확인한다. 실제 기능은 나중에 연결한다.',
  },
  automation: {
    name: 'Workflow Automation',
    korean: '업무 흐름 자동화',
    tools: 'Power Automate · Copilot Studio(흐름)',
    first: '가장 반복적인 흐름 1개(트리거 → 단계 → 결과)를 그려 ACE와 자동화 범위를 정한다.',
  },
  agent: {
    name: 'AI Agent',
    korean: '스스로 판단하는 에이전트',
    tools: 'Copilot Studio · Manus · (코드) Claude Code · Codex',
    first: '먼저 Custom AI나 자동화로 일부를 검증하고, 사람 승인 지점을 정한 뒤 좁은 목표부터 시작한다.',
  },
}

type Answers = Partial<Record<QuestionId, boolean>>

function classify(a: Answers): { key: SolutionKey; difficulty: 'LOW' | 'MEDIUM' | 'HIGH'; why: string; note?: string } {
  let key: SolutionKey
  if (a.aiDecides && a.multiTool) key = 'agent'
  else if (a.fixedSequence && !a.needsScreen && !a.aiDecides) key = 'automation'
  else if (a.needsScreen) key = 'webapp'
  else if (a.conversational) key = 'customai'
  else key = 'customai'

  let difficulty: 'LOW' | 'MEDIUM' | 'HIGH'
  if (key === 'agent') difficulty = 'HIGH'
  else if (key === 'webapp') difficulty = a.internalData && a.multiUser ? 'HIGH' : 'MEDIUM'
  else if (key === 'automation') difficulty = 'MEDIUM'
  else difficulty = a.internalData ? 'MEDIUM' : 'LOW'

  const reasons: string[] = []
  if (a.conversational) reasons.push('대화 중심')
  if (a.needsScreen) reasons.push('전용 화면 필요')
  if (a.fixedSequence) reasons.push('반복 순서 존재')
  if (a.aiDecides) reasons.push('AI 자율 판단')
  if (a.multiTool) reasons.push('여러 도구 연계')
  const why = reasons.length
    ? `${reasons.join(' · ')} — 이 조합에 가장 가깝습니다.`
    : '답변을 종합한 결과입니다.'

  let note: string | undefined
  if (a.aiDecides && key !== 'agent') note = '에이전트 성격이 일부 있습니다. 전체를 자율화하기 전, 사람이 판단하는 지점을 남기고 좁게 시작하세요.'
  else if (a.internalData) note = '사내 데이터 연결은 승인·권한·보안 검토가 먼저입니다. 외부 실험은 합성·공개 데이터로 시작하세요.'

  return { key, difficulty, why, note }
}

export function DecisionDiagnostic() {
  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)

  const answered = questions.filter((question) => answers[question.id] !== undefined).length
  const allAnswered = answered === questions.length

  const set = (id: QuestionId, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const outcome = submitted ? classify(answers) : null
  const result = outcome ? results[outcome.key] : null

  return (
    <div className="decision-diagnostic">
      <div className="decision-diagnostic__head">
        <span>DECISION TOOL</span>
        <strong>무엇을 만들지 진단합니다.</strong>
        <p>7개 질문에 답하면 예상 솔루션 타입과 첫 실험을 제안합니다. 정답이 아니라 출발점입니다.</p>
      </div>

      <ol className="decision-diagnostic__questions">
        {questions.map((question, index) => (
          <li key={question.id} className={answers[question.id] !== undefined ? 'is-answered' : ''}>
            <div className="decision-diagnostic__q">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p>{question.text}</p>
                <small>{question.hint}</small>
              </div>
            </div>
            <div className="decision-diagnostic__choice" role="group" aria-label={question.text}>
              <button
                type="button"
                aria-pressed={answers[question.id] === true}
                onClick={() => set(question.id, true)}
              >
                예
              </button>
              <button
                type="button"
                aria-pressed={answers[question.id] === false}
                onClick={() => set(question.id, false)}
              >
                아니오
              </button>
            </div>
          </li>
        ))}
      </ol>

      <div className="decision-diagnostic__actions">
        <button
          type="button"
          className="decision-diagnostic__submit"
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
        >
          {allAnswered ? '결과 보기' : `${answered} / ${questions.length} 응답`}
        </button>
        {(submitted || answered > 0) && (
          <button type="button" className="decision-diagnostic__reset" onClick={reset}>
            다시 하기
          </button>
        )}
      </div>

      {outcome && result && (
        <Reveal className="decision-diagnostic__result" key={outcome.key}>
          <p className="decision-diagnostic__result-eyebrow">예상 솔루션 타입</p>
          <div className="decision-diagnostic__result-head">
            <strong>{result.name}</strong>
            <span className={`decision-diagnostic__difficulty is-${outcome.difficulty.toLowerCase()}`}>
              난이도 {outcome.difficulty}
            </span>
          </div>
          <p className="decision-diagnostic__result-ko">{result.korean}</p>
          <dl>
            <div>
              <dt>왜</dt>
              <dd>{outcome.why}</dd>
            </div>
            <div>
              <dt>도구 예시 <em>2026.09 기준</em></dt>
              <dd>{result.tools}</dd>
            </div>
            <div>
              <dt>첫 실험</dt>
              <dd>{result.first}</dd>
            </div>
          </dl>
          {outcome.note && <p className="decision-diagnostic__note">{outcome.note}</p>}
        </Reveal>
      )}
    </div>
  )
}
