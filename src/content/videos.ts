// VIDEO 01–03 슬롯 데이터. src가 없으면 VideoSlot은 아무것도 렌더하지 않는다(구조만 준비).
// src: public/video/<file>.mp4 상대 경로 또는 외부 embed URL(https://…). poster: 선택.

export type VideoSlotData = {
  id: string
  number: string
  title: string
  question: string
  minutes: string
  src?: string
  poster?: string
}

export const videos: Record<'01' | '02' | '03', VideoSlotData> = {
  '01': {
    id: 'video-01',
    number: '01',
    title: 'AI가 도대체 무엇인가',
    question: '챗봇·검색기와 무엇이 다른가',
    minutes: '3–5분',
  },
  '02': {
    id: 'video-02',
    number: '02',
    title: 'Vibe Coding으로 만드는 방식이 어떻게 바뀌었는가',
    question: '코드를 아는 사람만 만들던 것에서 문제를 아는 사람이 AI와 함께 만드는 방식으로',
    minutes: '3–5분',
  },
  '03': {
    id: 'video-03',
    number: '03',
    title: 'AI가 현대건설을 이해하려면 왜 Data + Relationship + Context가 필요한가',
    question: '데이터 보유와 맥락 이해는 왜 다른가',
    minutes: '3–5분',
  },
}
