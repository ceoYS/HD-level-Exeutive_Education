import { Reveal } from './Reveal'
import { VideoSlot } from './VideoSlot'
import { videos } from '../content/videos'

function Arrow() {
  return (
    <svg viewBox="0 0 64 24" aria-hidden="true">
      <path d="M2 12h50M42 3l11 9-11 9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 01 AI 첫 화면. 원문(CH 01·02) 바깥의 신규 이해 보조 도식: INPUT → AI → OUTPUT, + TOOL → ACTION. */
export function AiCoreVisual() {
  return (
    <section className="ai-core" id="ai-core" aria-labelledby="ai-core-title">
      <div className="ai-core__inner">
        <Reveal className="ai-core__head">
          <p className="ai-core__eyebrow">AI CORE</p>
          <p className="ai-core__not" aria-label="AI는 이것이 아닙니다">
            <s>단순 챗봇</s>
            <s>검색기</s>
          </p>
          <h2 id="ai-core-title">
            AI는 정보를 받아 생성·추론·판단하고,
            <br />
            도구가 연결되면 행동까지 합니다.
          </h2>
        </Reveal>

        <div className="ai-core__diagram">
          <Reveal className="ai-core__node ai-core__node--input">
            <span>INPUT</span>
            <ul>
              <li>정보</li>
              <li>질문</li>
              <li>데이터</li>
              <li>맥락</li>
            </ul>
          </Reveal>
          <Reveal className="ai-core__arrow" delay={160}>
            <Arrow />
          </Reveal>
          <Reveal className="ai-core__node ai-core__node--ai" delay={320}>
            <span>AI</span>
            <ul>
              <li>생성</li>
              <li>추론</li>
              <li>판단</li>
            </ul>
            <small>MODEL / LLM</small>
          </Reveal>
          <Reveal className="ai-core__arrow" delay={480}>
            <Arrow />
          </Reveal>
          <Reveal className="ai-core__node ai-core__node--output" delay={640}>
            <span>OUTPUT</span>
            <ul>
              <li>답변</li>
              <li>분석</li>
              <li>콘텐츠</li>
            </ul>
          </Reveal>
          <Reveal className="ai-core__branch" delay={900}>
            <span>+ TOOL</span>
            <i aria-hidden="true" />
          </Reveal>
          <Reveal className="ai-core__node ai-core__node--action" delay={1100}>
            <span>ACTION</span>
            <a href="#chapter-1">
              CH 01 · AGENT <b aria-hidden="true">→</b>
            </a>
          </Reveal>
        </div>

        <VideoSlot video={videos['01']} />
      </div>
    </section>
  )
}
