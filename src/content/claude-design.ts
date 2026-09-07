// 02 VIBE CODING · CH 04(원문 Ch7) 역할 4개 뒤에 들어가는 디자인 → 개발 인계 흐름. Claude Design 추가분.
// 원문(CONTENT LOCK) 바깥의 추가 문자열이며 review/content-lock/approved-new.txt [N]에 등록한다.

export const claudeDesign = {
  eyebrow: 'DESIGN → BUILD · CLAUDE DESIGN',
  statement: ['디자인도 말로만 설명하는 것이 아니라,', 'AI와 함께 먼저 눈에 보이는 결과물로 만든 뒤', '개발로 넘길 수 있습니다.'],
  flow: [
    { name: 'IDEA / REQUIREMENT' },
    { name: 'CLAUDE DESIGN', items: ['Visual Direction', 'Prototype', 'Design System'] },
    { name: 'REFERENCE / SCREENSHOT FEEDBACK' },
    { name: 'SPEC KIT' },
    { name: 'CLAUDE CODE / CODEX' },
    { name: 'BUILD' },
  ],
  capabilities: [
    '대화를 통해 디자인 제작',
    'Interactive Prototype 제작 가능',
    'Design System / Codebase context 활용 가능',
    'Claude Code handoff 가능',
  ],
} as const
