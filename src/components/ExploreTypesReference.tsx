import { WatchOut } from './Callout'
import { Reveal } from './Reveal'
import { exploreTypes } from '../content/explore-types'

/** ACE 참고 · 구현 유형 4가지. 구 Book02 EXPLORE 패널(원문)을 접이식 안에서 재렌더한다. */
export function ExploreTypesReference() {
  return (
    <div className="explore-reference">
      {exploreTypes.map((type, index) => (
        <article className="explore-reference__type" key={type.key}>
          <header className="explore-reference__head">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{type.name}</strong>
            <em>{type.korean}</em>
            <p>{type.summary}</p>
          </header>

          <div className="explore-type-grid">
            <Reveal as="article" className="explore-panel">
              <span>WHEN IT FITS</span>
              <h3>이럴 때 잘 맞습니다</h3>
              <ul>
                {type.whenBest.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
            <Reveal as="article" className="explore-panel explore-panel--examples">
              <span>EXAMPLES · 건설업 예시</span>
              <h3>이런 제품을 생각할 수 있습니다</h3>
              <ul>
                {type.examples.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          </div>

          <details className="explore-build-detail">
            <summary>
              <span>HOW IT GETS BUILT</span>
              <strong>이 유형은 실제로 어떻게 만드나</strong>
              <i aria-hidden="true">+</i>
            </summary>
            <div className="explore-build-detail__body">
              <ol className="explore-build-steps">
                {type.buildSteps.map((step, stepIndex) => (
                  <li key={step}>
                    <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
              <div className="explore-concepts">
                <span>이 과정에서 쓰는 개념</span>
                <div>
                  {type.concepts.map((concept) => <strong key={concept}>{concept}</strong>)}
                </div>
              </div>
            </div>
          </details>

          <WatchOut>{type.caution}</WatchOut>
        </article>
      ))}
    </div>
  )
}
