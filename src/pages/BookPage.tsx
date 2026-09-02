import { useState } from 'react'
import { BuildMap } from '../components/BuildMap'
import { ExecutiveTakeaway, SecurityGate, WatchOut } from '../components/Callout'
import { CapabilityCheck } from '../components/CapabilityCheck'
import { HarnessDiagram } from '../components/HarnessDiagram'
import { NavigateLink } from '../components/NavigateLink'
import { PromptBlock } from '../components/PromptBlock'
import { Reveal } from '../components/Reveal'
import { ScreenshotPlaceholder } from '../components/ScreenshotPlaceholder'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import { SourceNote } from '../components/SourceNote'
import { SystemDiagram } from '../components/SystemDiagram'
import { ToolMap } from '../components/ToolMap'
import { TryThisPrompt } from '../components/TryThisPrompt'
import { bookChapters } from '../content/books'
import { useCurrentChapter } from '../hooks/useCurrentChapter'
import { useReadingProgress } from '../hooks/useReadingProgress'

const referenceSteps = [
  ['01', 'FIND', '좋은 화면을 찾는다'],
  ['02', 'CAPTURE', '필요한 장면을 캡처한다'],
  ['03', 'ANALYZE', '정보구조와 흐름을 분석한다'],
  ['04', 'REINTERPRET', '우리 업무에 맞게 재구성한다'],
  ['05', 'BUILD', '첫 번째 버전을 만든다'],
]

const endingAbilities = [
  '문제를 발견하는 능력',
  '맥락을 설명하는 능력',
  '결과를 판단하는 능력',
  'AI에게 다시 지시하는 능력',
  '업무에 적용하는 능력',
]

export function BookPage() {
  const progress = useReadingProgress()
  const currentChapter = useCurrentChapter()
  const [chaptersOpen, setChaptersOpen] = useState(false)

  return (
    <div className="book-page">
      <SiteHeader bookMode progress={progress} currentChapter={currentChapter} bookNumber="01" bookKeyword="UNDERSTAND" total={8} />
      <main id="main-content">
        <article>
          <header className="book-opening book-entry-surface">
            <div className="book-opening__index">
              <span>BOOK</span>
              <strong>01</strong>
              <span>UNDERSTAND</span>
            </div>
            <div className="book-opening__statement">
              <p>AI BUILD · THE FIRST MAP</p>
              <h1>
                AI로 만드는 일의
                <br />
                전체 지도.
              </h1>
              <p className="book-opening__sub">
                AI에게 제대로 일을 시키기 위해
                <br />
                <em>“무엇이 어떻게 연결되는지”</em>를 이해하는 과정입니다.
              </p>
            </div>
            <button
              type="button"
              className="chapter-toggle"
              aria-expanded={chaptersOpen}
              aria-controls="chapter-list"
              onClick={() => setChaptersOpen((current) => !current)}
            >
              <span>8 CHAPTERS</span>
              <i aria-hidden="true">{chaptersOpen ? '−' : '+'}</i>
            </button>
            <ol id="chapter-list" className={`chapter-list${chaptersOpen ? ' is-open' : ''}`}>
              {bookChapters.map((chapter, index) => (
                <li key={chapter}>
                  <a href={`#chapter-${index + 1}`} onClick={() => setChaptersOpen(false)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>{chapter}
                  </a>
                </li>
              ))}
            </ol>
            <a className="book-opening__begin" href="#chapter-1">
              START READING <span aria-hidden="true">↓</span>
            </a>
          </header>

          <section className="chapter chapter--intent" id="chapter-1">
            <div className="chapter__inner">
              <SectionIntro number="01" title="AI는 어디까지 할 수 있는가">
                <p>
                  AI는 <strong>사람의 의도를 결과로 바꾸는 엔진</strong>입니다.
                  무엇을 넣고 어떤 맥락을 주는지에 따라 결과가 달라집니다.
                </p>
              </SectionIntro>

              <Reveal className="intent-machine">
                <div className="intent-machine__input">
                  <span>HUMAN INTENT</span>
                  <strong>문제 · 지시 · 자료 · 기준</strong>
                </div>
                <span className="intent-machine__arrow" aria-hidden="true">→</span>
                <div className="intent-machine__core">
                  <span>LARGE LANGUAGE MODEL</span>
                  <strong>LLM</strong>
                  <small>맥락을 읽고 다음 결과를 생성</small>
                </div>
                <span className="intent-machine__arrow" aria-hidden="true">→</span>
                <div className="intent-machine__outputs">
                  {['TEXT', 'ANALYSIS', 'IMAGE', 'CODE', 'ACTION'].map((output) => (
                    <span key={output}>{output}</span>
                  ))}
                </div>
              </Reveal>

              <div className="concept-notes">
                <Reveal as="article">
                  <span>01</span>
                  <h3>Prompt</h3>
                  <p>지금 AI에게 보내는 하나의 요청</p>
                </Reveal>
                <Reveal as="article" delay={80}>
                  <span>02</span>
                  <h3>Context</h3>
                  <p>그 요청을 제대로 이해하는 데 필요한 배경과 자료</p>
                </Reveal>
                <Reveal as="article" delay={160}>
                  <span>03</span>
                  <h3>AI Product</h3>
                  <p>AI 능력이 화면·데이터·업무 흐름과 연결된 실제 서비스</p>
                </Reveal>
              </div>
              <p className="chapter-pullquote">
                같은 AI라도 <em>무엇을 알고 시작하는가</em>에 따라
                <br /> 전혀 다른 결과를 만듭니다.
              </p>

              <div className="sub-statement">
                <span className="eyebrow">GENERATION ≠ TRUTH</span>
                <h3>
                  AI가 잘한다고 해서
                  <br />
                  <em>맞다는 뜻은 아닙니다.</em>
                </h3>
                <p>
                  LLM은 다음에 올 가장 <strong>그럴듯한</strong> 내용을 생성합니다. 그래서 사실이
                  아닐 때도 확신에 찬 문장으로 답할 수 있습니다. 이를 환각(hallucination)이라
                  부릅니다.
                </p>
              </div>
              <WatchOut>
                계약 금액, 법규 조항, 프로젝트 사실처럼 <strong>틀리면 대가가 큰 정보</strong>는
                출처와 원문으로 반드시 확인하세요.
              </WatchOut>
              <ExecutiveTakeaway>
                AI는 <strong>변환·분석·초안·구현</strong>에 강력합니다. 그러나 최종 판단은 여전히
                사람의 몫입니다. AI를 잘 쓰는 실장은 "빠른 초안 + 엄격한 검증"을 함께 씁니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--tools" id="chapter-2">
            <div className="chapter__inner">
              <SectionIntro number="02" title="AI마다 역할이 다르다">
                <p>
                  도구 이름부터 외울 필요는 없습니다. 먼저 <strong>지금 해야 할 일</strong>을 정하면,
                  적절한 AI의 역할이 보입니다.
                </p>
              </SectionIntro>
              <Reveal><ToolMap /></Reveal>

              <div className="sub-statement">
                <span className="eyebrow">JOB → TOOL</span>
                <h3>
                  단계마다
                  <br />
                  <em>도구를 바꿔도 됩니다.</em>
                </h3>
                <p>
                  생각은 A로, 내 자료 정리는 B로, 화면은 C로. 어떤 제품이 1등인지 외우는 대신,
                  "지금 나는 THINK 단계인가, BUILD 단계인가"를 먼저 묻는 습관이 더 오래갑니다.
                </p>
              </div>

              <SourceNote>
                <ul>
                  <li>Custom AI(ChatGPT GPT/Project · Claude Project · Gemini Gem)는 지시 + 맥락 + 지식파일을 저장한 "설정"입니다. 자동으로 자율 에이전트가 되지는 않습니다.</li>
                  <li>도구별 차이: 커스텀 GPT는 지식 + 제3자 액션 모두 지원, Gemini Gem은 지식은 지원하나 제3자 액션은 미지원, Claude Project는 지식은 프로젝트 안, 도구 연결은 계정 수준.</li>
                  <li>NotebookLM은 내가 올린 자료에서만 인용과 함께 답합니다(일반 웹 검색 에이전트가 아님).</li>
                  <li>출처: openai.com · support.claude.com · gemini.google · blog.google. 역할·예시는 바뀔 수 있어 카테고리 수준으로 서술했습니다.</li>
                </ul>
              </SourceNote>
              <ExecutiveTakeaway>
                실장이 기억할 것은 <strong>역할의 지도</strong>입니다. "이 일은 어떤 역할이
                필요한가?"를 먼저 정하면, 그 자리에 맞는 도구는 ACE가 최신으로 채워줄 수 있습니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--system" id="chapter-3">
            <div className="chapter__inner">
              <SectionIntro number="03" title="프로그램은 무엇으로 이루어지는가" inverse>
                <p>
                  화면·기능·저장·연결. 이 네 가지가 어떻게 이어지는지 알면
                  <strong> 일의 순서를 지시</strong>할 수 있습니다.
                </p>
              </SectionIntro>
              <Reveal><SystemDiagram /></Reveal>

              <div className="system-terms">
                {[
                  ['FRONTEND', '사용자가 보고 누르는 화면'],
                  ['BACKEND', '화면 뒤에서 규칙을 처리하는 기능'],
                  ['DATABASE', '정보를 기억하고 다시 꺼내는 저장소'],
                  ['API', '내부·외부 시스템과 데이터를 주고받는 연결'],
                  ['AUTHENTICATION', '누가 들어왔는지 확인하고 권한을 나누는 과정'],
                  ['DEPLOY', '만든 제품을 실제로 접속할 수 있게 내보내는 일'],
                ].map(([term, meaning]) => (
                  <Reveal as="div" className="system-term" key={term}>
                    <strong>{term}</strong><p>{meaning}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="why-terms">
                <p className="eyebrow">WHY THESE WORDS MATTER</p>
                <h3>
                  직접 코딩하기 위해서가 아니라,
                  <br />
                  <em>일의 순서를 정확히 지시하기 위해서.</em>
                </h3>
              </Reveal>

              <div className="sub-statement">
                <span className="eyebrow">PROTOTYPE ≠ PRODUCTION</span>
                <h3>
                  Prototype과 Production은
                  <br />
                  <em>다른 단계입니다.</em>
                </h3>
                <p>
                  먼저 <strong>작동하는 그림</strong>을 확인하고(Prototype), 그것이 옳다고 판단된
                  뒤에 <strong>실제 사용자·데이터·권한·운영</strong>을 견디게 만듭니다(Production).
                  이 순서를 합의하지 않으면 이후 모든 지시가 꼬입니다.
                </p>
              </div>
              <div className="contrast-pair">
                <div className="contrast-pair__side">
                  <span>PROTOTYPE</span>
                  <strong>작동하는 그림을 먼저 확인</strong>
                  <p>샘플 데이터(Dummy Data) · 화면과 사용자 흐름 검증 · 빠르고 저렴하게 바꿔봄 · 아직 실제 데이터 없음</p>
                </div>
                <span className="contrast-pair__op" aria-hidden="true">→</span>
                <div className="contrast-pair__side contrast-pair__side--accent">
                  <span>PRODUCTION</span>
                  <strong>실제 운영을 견디는 단계</strong>
                  <p>실제 데이터 · 로그인/권한 · 오류·보안·성능 · 여러 사람이 매일 사용</p>
                </div>
              </div>
              <WatchOut>
                디자인 Prototype이 그럴듯하다고 곧바로 실무에 쓸 수 있는 것은 아닙니다. 예쁜 화면과
                <strong> 실제로 데이터를 저장·조회하고 권한을 지키는 시스템</strong>은 전혀 다른
                작업량입니다. "언제까지가 Prototype이고 언제부터 Production인지"를 ACE와 명확히
                합의하세요.
              </WatchOut>
              <TryThisPrompt heading="순서를 지시하는 두 단계">
                <PromptBlock label="STAGE 1 · PROTOTYPE" tone="dark">
                  현재 단계에서는 디자인과 사용자 흐름을 검증하는 Prototype만 만든다. 실제 사내 데이터, 로그인, Database는 아직 연결하지 마라. 샘플 데이터로 화면과 흐름만 보여줘.
                </PromptBlock>
                <PromptBlock label="STAGE 2 · PRODUCTION" tone="signal">
                  승인된 화면과 사용자 흐름은 변경하지 말고, 실제 Backend, Database, Authentication을 연결해. 바꾸기 전에 무엇을 바꿀지 먼저 설명해줘.
                </PromptBlock>
              </TryThisPrompt>
            </div>
          </section>

          <section className="chapter chapter--screen" id="chapter-4">
            <div className="chapter__inner">
              <SectionIntro number="04" title="AI로 화면부터 만든다">
                <p>
                  실제 기능에 시간과 비용을 쓰기 전, <strong>사용자가 보게 될 경험</strong>부터 빠르게 만들어 확인할 수 있습니다.
                </p>
              </SectionIntro>
              <ol className="screen-workflow" aria-label="화면부터 만드는 순서">
                {[
                  ['PROBLEM', '문제와 아이디어'],
                  ['CONVERSATION', '요구사항 대화'],
                  ['REFERENCE', '좋은 사례 탐색'],
                  ['DESIGN', '설계와 Prototype'],
                  ['FRONTEND', '첫 화면 구현'],
                ].map(([title, korean], index) => (
                  <Reveal as="li" delay={index * 70} key={title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{title}</strong>
                    <p>{korean}</p>
                  </Reveal>
                ))}
              </ol>
              <Reveal>
                <ScreenshotPlaceholder
                  tool="Claude Design"
                  purpose="초기 인터페이스 생성 장면"
                  description="생성된 UI와 prompt 입력 영역이 함께 보이는 화면"
                  ratio="16:10"
                  annotation="generated UI / prompt area / preview"
                />
              </Reveal>
              <p className="tool-example-note">
                <span>CURRENT EXAMPLE</span>
                Claude Design은 현재 예시입니다. 도구가 바뀌어도 제작 원리는 같습니다.
              </p>

              <div className="sub-statement">
                <span className="eyebrow">PROTOTYPE REVIEW</span>
                <h3>
                  Prototype을 볼 때
                  <br />
                  <em>실장은 이것을 봅니다.</em>
                </h3>
                <p>
                  실제 업무가 이 화면에서 돌아가는지를 봅니다. 이 판단은 현장을 아는 실장이
                  ACE보다 훨씬 잘합니다.
                </p>
              </div>
              <ul className="review-checklist">
                <li>필요한 정보가 한눈에 보이는가?</li>
                <li>어떤 버튼을 눌러야 하는지 명확한가?</li>
                <li>실제 업무 순서와 맞는가?</li>
                <li>불필요한 정보가 과도하지 않은가?</li>
                <li>의사결정에 필요한 정보가 빠지지 않았는가?</li>
              </ul>
              <ExecutiveTakeaway>
                Prototype 리뷰는 실장이 가장 큰 가치를 더하는 지점입니다. "여기서 결재하려면 이
                숫자가 같이 보여야 한다", "이 순서가 실제 현장과 다르다" 같은 지적은 <strong>암묵지가
                제품 요구사항으로 바뀌는 순간</strong>입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--reference" id="chapter-5">
            <div className="chapter__inner">
              <SectionIntro number="05" title="처음부터 생각할 필요는 없습니다." english="REFERENCE-DRIVEN BUILD">
                <p>
                  이미 검증된 화면에서 <strong>정보의 구조와 사용자 흐름</strong>을 읽어내고,
                  HDEC 업무 맥락에 맞는 새로운 제품으로 재구성합니다.
                </p>
              </SectionIntro>

              <div className="sub-statement">
                <span className="eyebrow">THREE LAYERS OF REFERENCE</span>
                <h3>
                  무엇을 참고하는지
                  <br />
                  <em>구분해서 봅니다.</em>
                </h3>
                <p>
                  좋은 레퍼런스는 "이 화면처럼 보이고 싶다"에서 끝나지 않습니다. 세 개의 층을
                  나눠 보면, 무엇을 가져오고 무엇을 두고 올지가 분명해집니다.
                </p>
              </div>
              <div className="concept-notes">
                <Reveal as="article">
                  <span>01</span>
                  <h3>Visual</h3>
                  <p>이 화면처럼 보이고 싶다 — 시각적 완성도와 톤</p>
                </Reveal>
                <Reveal as="article" delay={80}>
                  <span>02</span>
                  <h3>Interaction</h3>
                  <p>이 기능의 사용 흐름이 좋다 — 행동과 순서</p>
                </Reveal>
                <Reveal as="article" delay={160}>
                  <span>03</span>
                  <h3>Information</h3>
                  <p>정보를 정리하는 방식이 좋다 — 정보구조(IA)</p>
                </Reveal>
              </div>

              <div className="reference-sequence">
                {referenceSteps.map(([number, english, korean], index) => (
                  <Reveal className="reference-step" delay={index * 60} key={number}>
                    <span>{number}</span>
                    <strong>{english}</strong>
                    <p>{korean}</p>
                    {index < referenceSteps.length - 1 && <i aria-hidden="true">→</i>}
                  </Reveal>
                ))}
              </div>

              <div className="reference-boundary">
                <div>
                  <span>REFERENCE</span>
                  <strong>구조와 원리를 분석합니다.</strong>
                  <p>정보 위계 · 사용자 흐름 · 상호작용 패턴</p>
                </div>
                <i aria-hidden="true">≠</i>
                <div>
                  <span>COPY</span>
                  <strong>소유물을 복제하지 않습니다.</strong>
                  <p>독점 코드 · 브랜드 · 이미지 · 고유 자산</p>
                </div>
              </div>

              <Reveal className="hdec-scenario">
                <div className="hdec-scenario__rail">
                  <span>HDEC FIELD SCENARIO</span>
                  <strong>프로젝트 포트폴리오 관리 화면</strong>
                </div>
                <div className="hdec-scenario__prompts">
                  <PromptBlock label="01 · ANALYZE" tone="light">
                    이 화면을 디자인 관점이 아니라 정보구조와 사용자 행동 관점에서 분석해줘.
                  </PromptBlock>
                  <PromptBlock label="02 · EXTRACT" tone="light">
                    여기서 재사용 가능한 UX 원칙만 추출해줘. 브랜드·문구·고유 자산은 제외해.
                  </PromptBlock>
                  <PromptBlock label="03 · REINTERPRET" tone="light">
                    이 구조를 여러 건설 프로젝트를 동시에 관리하는 실장급 임원용 Dashboard로 재구성해줘.
                  </PromptBlock>
                  <PromptBlock label="04 · BUILD" tone="light">
                    실제 기능은 아직 연결하지 말고 샘플 데이터로 Frontend Prototype을 만들어줘.
                  </PromptBlock>
                </div>
              </Reveal>

              <ExecutiveTakeaway>
                같은 방법을 다른 화면에도 그대로 적용할 수 있습니다 —
                <strong> 현장 리스크 요약, 경영회의 Action Tracker, 신규 사업 기초검토</strong>.
                레퍼런스에서 배우는 것은 <strong>정보를 정리하는 원리</strong>입니다. 원리는
                가져오되, 브랜드·문구·독점 코드는 두고 옵니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--connect" id="chapter-6">
            <div className="chapter__inner">
              <SectionIntro number="06" title="화면 뒤에 실제 기능을 연결한다">
                <p>
                  화면과 흐름이 승인되면, 그때 실제 데이터를 저장하고 사내외 시스템과 연결하고
                  사용자별 권한을 설정합니다.
                </p>
              </SectionIntro>

              <Reveal className="stack-equation" aria-label="Frontend 더하기 Backend 더하기 Database 더하기 API 더하기 Authentication">
                {['FRONTEND', 'BACKEND', 'DATABASE', 'API', 'AUTH'].map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{item}</strong>
                    {index < 4 && <i aria-hidden="true">+</i>}
                  </div>
                ))}
                <p>= WORKING PRODUCT</p>
              </Reveal>

              <div className="connect-copy">
                <p>
                  <span>먼저</span>
                  화면에서 업무 흐름을 확인합니다.
                </p>
                <p>
                  <span>그다음</span>
                  승인된 흐름을 유지하며 실제 기능을 연결합니다.
                </p>
              </div>

              <div className="sub-statement">
                <span className="eyebrow">DISPLAY ≠ STORE</span>
                <h3>
                  보여주는 것과
                  <br />
                  <em>저장하는 것은 다릅니다.</em>
                </h3>
                <p>
                  Prototype의 "Project A"는 화면에 <strong>박아 넣은 예시</strong>입니다. Production은
                  실제 프로젝트 기록을 <strong>저장하고, 다시 꺼내고, 수정</strong>합니다. 겉모습은
                  비슷해도 뒤에서 하는 일이 전혀 다릅니다.
                </p>
              </div>
              <div className="contrast-pair">
                <div className="contrast-pair__side">
                  <span>BEFORE · 화면에 표시만</span>
                  <strong>하드코딩된 예시</strong>
                  <p>"Project A · 공정률 62%"가 코드에 고정되어 있음. 새로고침해도 항상 같은 값.</p>
                </div>
                <span className="contrast-pair__op" aria-hidden="true">→</span>
                <div className="contrast-pair__side contrast-pair__side--accent">
                  <span>AFTER · 실제로 저장·조회</span>
                  <strong>Database의 실제 기록</strong>
                  <p>프로젝트를 추가·수정하면 Database에 저장되고, 다음에 열 때 그대로 다시 나타남.</p>
                </div>
              </div>
              <Reveal>
                <PromptBlock>
                  지금 확정된 화면 구조와 상호작용은 유지해. 프로젝트 데이터를 저장하는 Database와 조회·수정 기능을 담당할 Backend를 연결하고, 사용자 역할별 접근 권한을 추가해.
                </PromptBlock>
              </Reveal>

              <div className="sub-statement">
                <span className="eyebrow">INTERNAL INTEGRATION</span>
                <h3>
                  언젠가는 사내 시스템과
                  <br />
                  <em>연결될 수 있습니다.</em>
                </h3>
                <p>
                  HDEC 규모의 업무에서는 결국 <strong>Microsoft 365 · SharePoint · Teams · 사내
                  프로젝트 시스템 · 승인된 내부 API</strong> 같은 곳과 연결이 필요할 수 있습니다. 다만
                  이런 연결은 모두 <strong>회사의 승인·권한·거버넌스</strong>가 먼저입니다. 예시일 뿐,
                  특정 사내 시스템이 이미 연결되어 있다는 뜻은 아닙니다.
                </p>
              </div>
              <SecurityGate>
                기밀 사내 정보를 <strong>승인되지 않은 외부 AI 서비스</strong>에 넣지 마세요. 외부에서
                실험할 때는 합성·공개·익명화된 데이터를 쓰고, 실제 사내 데이터 연결은 승인된
                서비스·정책 안에서만 진행합니다. API·커넥터는 접근 권한과 거버넌스가 따라옵니다.
              </SecurityGate>
            </div>
          </section>

          <section className="chapter chapter--harness" id="chapter-7">
            <div className="chapter__inner">
              <SectionIntro number="07" title="한 번의 프롬프트에서 프로젝트 시스템으로" inverse>
                <p>
                  좋은 프롬프트는 한 번의 일을 잘 시작합니다. 좋은 환경은 AI가 <strong>며칠, 몇 주 동안 같은 방향으로</strong>
                  계속 일하게 합니다.
                </p>
              </SectionIntro>

              <div className="sub-statement">
                <span className="eyebrow">CHAT → PROJECT → REPOSITORY</span>
                <h3>
                  대화에서 프로젝트로,
                  <br />
                  <em>프로젝트에서 저장소로.</em>
                </h3>
                <p>
                  같은 AI라도 담는 그릇이 커질수록 더 오래, 더 일관되게 일합니다. 한 번의
                  <strong> 대화(Chat)</strong>는 지금의 지시, <strong>프로젝트(Project)</strong>는
                  맥락과 파일과 지시가 계속 남는 공간, <strong>저장소(Repository)</strong>는 제품의
                  실제 파일과 변경 이력이 쌓이는 작업장입니다.
                </p>
              </div>

              <div className="prompt-versus">
                <Reveal className="prompt-versus__side">
                  <span>ONE GOOD PROMPT</span>
                  <strong>한 번의 지시</strong>
                  <p>지금 필요한 결과를 선명하게 요청합니다.</p>
                  <div className="prompt-versus__line">INSTRUCTION → RESULT</div>
                </Reveal>
                <Reveal className="prompt-versus__side prompt-versus__side--project" delay={100}>
                  <span>PROJECT SYSTEM</span>
                  <strong>계속 이어지는 작업</strong>
                  <p>맥락, 규칙, 검증 방법을 환경 안에 남깁니다.</p>
                  <div className="prompt-versus__line">CONTEXT ↔ WORK ↔ VERIFY ↺</div>
                </Reveal>
              </div>

              <Reveal><HarnessDiagram /></Reveal>

              <div className="project-language">
                {[
                  ['Git / GitHub', '무엇이 언제 바뀌었는지 기록하고 협업하는 방식'],
                  ['CLAUDE.md / AGENTS.md', 'AI가 프로젝트 목적과 규칙을 계속 기억하도록 주는 지침'],
                  ['MCP / Connectors', 'AI가 허용된 도구와 외부 자료에 연결되는 통로'],
                  ['Skills', '반복 업무를 일관되게 수행하는 전문 작업법'],
                  ['Tests', '결과가 실제로 작동하는지 확인하는 기준'],
                  ['Permissions', 'AI가 어디까지 읽고 바꿀 수 있는지 정한 경계'],
                ].map(([term, explanation], index) => (
                  <Reveal as="article" className="project-term" delay={(index % 3) * 60} key={term}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{term}</h3>
                    <p>{explanation}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal className="harness-definition">
                <span>PROMPT</span><p>AI에게 주는 하나의 지시</p>
                <i aria-hidden="true">≠</i>
                <span>HARNESS</span><p>AI가 신뢰할 수 있게 계속 일하도록 돕는 전체 환경</p>
              </Reveal>

              <div className="sub-statement">
                <span className="eyebrow">GIT · GITHUB, IN PLAIN WORDS</span>
                <h3>
                  실장이 알아야 할
                  <br />
                  <em>네 단어.</em>
                </h3>
                <p>
                  실제 명령은 ACE가 다룹니다. 아래 네 단어의 뜻만 알면 "안전하게 나눠서 해",
                  "여기서 한 번 저장해 두자" 같은 방향을 지시할 수 있습니다.
                </p>
              </div>
              <div className="project-language">
                <Reveal as="article" className="project-term">
                  <span>A</span>
                  <h3>Repository</h3>
                  <p>프로젝트의 작업장과 전체 변경 이력</p>
                </Reveal>
                <Reveal as="article" className="project-term" delay={60}>
                  <span>B</span>
                  <h3>Commit</h3>
                  <p>의미 있는 지점을 저장하는 체크포인트</p>
                </Reveal>
                <Reveal as="article" className="project-term" delay={120}>
                  <span>C</span>
                  <h3>Branch</h3>
                  <p>본류를 건드리지 않고 안전하게 병행 작업</p>
                </Reveal>
                <Reveal as="article" className="project-term" delay={180}>
                  <span>D</span>
                  <h3>Push</h3>
                  <p>내 이력을 원격 저장소로 보내 공유</p>
                </Reveal>
              </div>
              <ExecutiveTakeaway>
                좋은 Prompt는 일을 한 번 잘 시킵니다. 그 일을 계속 잘하게 하는 것은
                지침·도구·권한·테스트·피드백·버전관리까지 갖춘 Harness, 곧 <strong>작업 환경
                전체</strong>입니다.
              </ExecutiveTakeaway>
            </div>
          </section>

          <section className="chapter chapter--map" id="chapter-8">
            <div className="chapter__inner chapter__inner--wide">
              <SectionIntro number="08" title="전체 지도를 한 장에 놓습니다." english="THE AI BUILD MAP">
                <p>
                  모든 프로젝트가 완전히 같지는 않습니다. 그러나 문제에서 업무 적용까지,
                  <strong>판단해야 할 순서</strong>는 하나의 지도로 볼 수 있습니다.
                </p>
              </SectionIntro>
              <Reveal><BuildMap /></Reveal>
            </div>
          </section>

          <footer className="book-ending">
            <div className="book-ending__opening">
              <p>AI 시대에 실장에게 가장 중요한 것은</p>
              <h2>더 많은 코딩 지식이 아닙니다.</h2>
            </div>
            <ol className="book-ending__abilities">
              {endingAbilities.map((ability, index) => (
                <Reveal as="li" delay={index * 60} key={ability}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{ability}</strong>
                  {index < endingAbilities.length - 1 && <i aria-hidden="true">↓</i>}
                </Reveal>
              ))}
            </ol>
            <Reveal className="cert-group">
              <p className="cert-group__intro">이제, 스스로 확인합니다.</p>
              <p className="cert-group__label">SELF CERTIFICATION · 나는 지금 이것을 할 수 있다</p>
              <CapabilityCheck
                id="b01-structure"
                evidence={false}
                statement="디지털 제품이 무엇으로(Frontend·Backend·Database·API) 이루어지는지 내 말로 설명할 수 있다."
              />
              <CapabilityCheck
                id="b01-proto-prod"
                evidence={false}
                statement="Prototype과 Production의 차이를 설명하고, 무엇을 먼저 만들지 지시할 수 있다."
              />
              <CapabilityCheck
                id="b01-roles"
                evidence={false}
                statement="어떤 일에 어떤 AI 역할(THINK·BUILD·AGENT 등)이 필요한지 구분할 수 있다."
              />
              <CapabilityCheck
                id="b01-prompt-harness"
                evidence={false}
                statement="Prompt와 Harness의 차이를, 그리고 왜 Harness가 오래 가는지 설명할 수 있다."
              />
            </Reveal>

            <Reveal className="book-ending__finale">
              <p>문제를 발견하는 능력은</p>
              <h2>이미 여러분이<br />가장 잘하는 일입니다.</h2>
              <span>
                20–30년 동안 축적한 현장의 판단과 조직의 암묵지.<br />
                AI BUILD는 그 지식을 작동하는 도구로 이어갑니다.
              </span>
            </Reveal>
            <NavigateLink href="/book/instruct" className="next-book">
              <span>NEXT BOOK · 02</span>
              <div>
                <strong>INSTRUCT</strong>
                <p>AI에게 일을 시키는 방법</p>
              </div>
              <i aria-hidden="true">→</i>
            </NavigateLink>
          </footer>
        </article>
      </main>
    </div>
  )
}
