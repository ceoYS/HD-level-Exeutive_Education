// 05 STEP 1 · AI에게 맡길 역할 3유형. 04 CASE chip과 같은 문자열을 쓴다.
import { exploreTypes } from './explore-types'

export const aiRoles = [
  {
    key: 'find',
    name: '찾아 답하는 AI',
    desc: '사내 기준 / 과거 사례 / 문서를 찾아 답함',
    example: 'HDEC NEWS / ISSUE AGENT',
    ace: 'Custom AI / Search / RAG / Agent',
  },
  {
    key: 'do',
    name: '일을 처리하는 AI',
    desc: '입력을 읽고 문서 작성 / 등록 / 알림 / 후속업무 수행',
    example: exploreTypes[2].examples[2],
    ace: 'Workflow / Automation / Agent',
  },
  {
    key: 'judge',
    name: '판단을 돕는 AI',
    desc: '데이터 / 기준 / 과거 사례를 비교해 우선순위 / Risk / 추천안 제시',
    example: 'CONTRACT PRE-REVIEW AGENT',
    ace: 'Analysis Tool / Dashboard / Decision Agent',
  },
] as const
