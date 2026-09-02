const agentParts = ['CONTEXT', 'TOOLS', 'MEMORY / KNOWLEDGE', 'LOOP', 'GUARDRAILS']

export function AiLayersDiagram() {
  return (
    <figure className="ai-layers">
      <figcaption>A SIMPLE LAYERED MODEL</figcaption>
      <div className="ai-layer ai-layer--agent">
        <div>
          <span>03</span>
          <strong>AGENT</strong>
          <p>목표를 받아 다음 행동을 판단하고, 도구를 쓰고, 결과를 본 뒤 계속하거나 멈춥니다.</p>
        </div>
        <div className="ai-layer__parts">
          {agentParts.map((part) => <span key={part}>{part}</span>)}
        </div>
      </div>
      <div className="ai-layer ai-layer--assistant">
        <span>02</span>
        <strong>AI ASSISTANT / PRODUCT</strong>
        <p>ChatGPT · Claude · Gemini처럼 사람이 묻고 AI가 응답하는 사용 화면과 제품</p>
      </div>
      <div className="ai-layer ai-layer--model">
        <span>01</span>
        <strong>MODEL / LLM</strong>
        <p>입력과 맥락을 바탕으로 생성하고 추론하는 기반 모델</p>
      </div>
    </figure>
  )
}
