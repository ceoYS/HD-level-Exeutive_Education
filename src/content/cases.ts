// 04 WHAT CAN WE BUILD? · 대표 사례 2개. LITE(지금 바로) / CONNECTED(연결하면) 체인.
export type CaseData = {
  id: string
  number: string
  title: string
  roles: ('find' | 'do' | 'judge')[]
  headline: string
  lite: string[]
  connected: string[]
  connectedNote?: { label: string; href: string }
}

export const cases: CaseData[] = [
  {
    id: 'news',
    number: '1',
    title: 'HDEC NEWS / ISSUE AGENT',
    roles: ['find', 'judge'],
    headline: '뉴스가 우리 Project에 어떤 영향인지 AI가 정리합니다.',
    lite: ['뉴스 / 자료 입력', 'AI 분석', '현대건설 영향 정리', 'HTML REPORT'],
    connected: [
      'NEWS API + Company Context + Project Data + 업무 Context',
      'AI',
      '국가 / Project / 계약 / 원가 / 공기 / Risk 영향',
      'Report / Alert',
    ],
    connectedNote: { label: 'VISUAL B TRACE와 같은 경로', href: '/book/hdec-context#visual-b' },
  },
  {
    id: 'contract',
    number: '2',
    title: 'CONTRACT PRE-REVIEW AGENT',
    roles: ['judge'],
    headline: '계약서를 Project 관점으로 미리 검토합니다.',
    lite: ['계약서 + 검토 기준', 'AI', '위험조항 / 확인사항', 'HTML Report'],
    connected: [
      '계약서 + 표준계약조건 + 과거 Claim + Project Context + 회사 Rule + 법령 / 외부 Source',
      'Agent',
      'Project 관점 Risk 검토',
    ],
  },
]

export const liteDefinition = {
  headline: '지금 바로 만들 수 있는 것과, 연결하면 할 수 있는 것.',
  lite: { label: 'LITE · 지금 바로', chain: '입력 → AI → HTML 결과물' },
  connected: { label: 'CONNECTED · 연결하면', chain: '회사 데이터 · API → AI → 회사 관점 판단' },
}

// 이미 만들어진 부서 특화 Use Case · 예시 제목만(파일·화면은 공개 사이트에 싣지 않는다).
export const liteReferenceExamples = [
  '회의록 요약',
  '공문 초안',
  '품의서 초안',
  '시방 조건 목록',
  '계약 쟁점 비교',
  'DABS 자료',
  '검측 요청 초안',
  '위험성평가 의견',
  'MSDS 요약',
  '공정 간섭 검토',
]
