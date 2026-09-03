export function AiLayersDiagram() {
  return (
    <figure className="ai-layers">
      <figcaption>FROM CONVERSATION TO ACTION</figcaption>
      <div className="ai-layer ai-layer--model">
        <span>01</span>
        <strong>CHAT</strong>
        <p>질문하고 답하며 함께 생각합니다. 사람이 다음 행동을 계속 지시합니다. · ChatGPT · Claude · Gemini</p>
      </div>
      <div className="ai-layer ai-layer--assistant">
        <span>02</span>
        <strong>PROJECT / WORKSPACE</strong>
        <p>파일·지시·이전 대화 등 프로젝트 맥락을 유지하며 계속 같이 일합니다. · ChatGPT Project · Claude Project</p>
      </div>
      <div className="ai-layer ai-layer--agent">
        <div>
          <span>03</span>
          <strong>AGENT</strong>
          <p>목표를 받아 필요한 도구를 사용해 여러 단계를 실제로 수행하고, 결과를 확인하며 다음 행동을 이어갑니다. · Claude Code · Codex · ChatGPT agent</p>
        </div>
      </div>
    </figure>
  )
}
