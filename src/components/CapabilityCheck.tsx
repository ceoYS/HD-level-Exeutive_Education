import { useEffect, useState } from 'react'

type CapabilityState = {
  done: boolean
  note: string
  ace: boolean
}

const emptyState: CapabilityState = { done: false, note: '', ace: false }

type CapabilityCheckProps = {
  id: string
  statement: string
  evidence?: boolean
  ace?: boolean
}

/**
 * 자기인증 항목. "나는 지금 이것을 직접 할 수 있다."
 * 지식 퀴즈가 아니라 습득한 역량을 실장이 스스로 확인하는 장치.
 * 브라우저 localStorage에 개인용으로만 저장된다(서버 전송 없음).
 */
export function CapabilityCheck({ id, statement, evidence = true, ace = false }: CapabilityCheckProps) {
  const storageKey = `hdec-cap-${id}`
  const [state, setState] = useState<CapabilityState>(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) return { ...emptyState, ...JSON.parse(raw) }
    } catch {
      /* private mode / blocked storage — render defaults */
    }
    return emptyState
  })

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state))
    } catch {
      /* ignore write failures */
    }
  }, [state, storageKey])

  return (
    <div className={`capability-check${state.done ? ' is-done' : ''}`}>
      <label className="capability-check__main">
        <input
          type="checkbox"
          checked={state.done}
          onChange={(event) => setState((prev) => ({ ...prev, done: event.target.checked }))}
        />
        <span className="capability-check__box" aria-hidden="true" />
        <span className="capability-check__statement">{statement}</span>
      </label>

      {evidence && (
        <label className="capability-check__evidence">
          <span>증빙 · EVIDENCE</span>
          <input
            type="text"
            value={state.note}
            placeholder="스크린샷 파일명 · 링크 · 한 줄 메모"
            onChange={(event) => setState((prev) => ({ ...prev, note: event.target.value }))}
          />
        </label>
      )}

      {ace && (
        <label className="capability-check__ace">
          <input
            type="checkbox"
            checked={state.ace}
            onChange={(event) => setState((prev) => ({ ...prev, ace: event.target.checked }))}
          />
          <span className="capability-check__box capability-check__box--sm" aria-hidden="true" />
          ACE 확인
        </label>
      )}
    </div>
  )
}
