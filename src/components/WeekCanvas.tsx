import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type WeekCanvasProps = {
  week: string
  phase: string
  title: string
  intent: string
  tasks: string[]
  deliverable: string
  children?: ReactNode
}

/**
 * Book 04의 주차 캔버스. 읽는 페이지가 아니라 실제로 사용하는 워크북 단위.
 * 목표 → 이번 주 할 일 → 산출물, 그리고 프롬프트/자기인증을 children으로 받는다.
 */
export function WeekCanvas({ week, phase, title, intent, tasks, deliverable, children }: WeekCanvasProps) {
  return (
    <section className="week-canvas" id={`week-${week}`}>
      <Reveal className="week-canvas__head">
        <div className="week-canvas__index">
          <span>WEEK</span>
          <strong>{week}</strong>
        </div>
        <div className="week-canvas__headline">
          <span className="week-canvas__phase">{phase}</span>
          <h3>{title}</h3>
          <p>{intent}</p>
        </div>
      </Reveal>

      <div className="week-canvas__grid">
        <Reveal className="week-canvas__tasks">
          <p className="week-canvas__label">이번 주 할 일</p>
          <ol>
            {tasks.map((task, index) => (
              <li key={task}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {task}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="week-canvas__deliverable" delay={80}>
          <p className="week-canvas__label">산출물 · DELIVERABLE</p>
          <strong>{deliverable}</strong>
        </Reveal>
      </div>

      {children && <div className="week-canvas__body">{children}</div>}
    </section>
  )
}
