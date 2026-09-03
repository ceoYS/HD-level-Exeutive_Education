const agentParts = ['CONTEXT', 'TOOLS', 'MEMORY / KNOWLEDGE', 'ORCHESTRATION', 'GUARDRAILS']

export function AiLayersDiagram() {
  return (
    <figure className="ai-layers">
      <figcaption>THREE DIFFERENT ROLES IN AN AI PRODUCT</figcaption>
      <div className="ai-layer ai-layer--agent">
        <div>
          <span>03</span>
          <strong>AGENT</strong>
          <p>목표를 받아 상황에 따라 다음 행동과 도구 사용을 판단하고, 결과를 확인하며 여러 단계를 수행합니다.</p>
        </div>
        <div className="ai-layer__parts">
          {agentParts.map((part) => <span key={part}>{part}</span>)}
        </div>
      </div>
      <div className="ai-layer ai-layer--assistant">
        <span>02</span>
        <strong>AI ASSISTANT / PRODUCT</strong>
        <p>모델에 화면·지시·지식·도구 등을 결합해 사용자의 요청을 돕는 제품 또는 사용 형태</p>
      </div>
      <div className="ai-layer ai-layer--model">
        <span>01</span>
        <strong>MODEL / LLM</strong>
        <p>입력과 맥락을 바탕으로 생성·추론을 수행하는 기반 모델</p>
      </div>
    </figure>
  )
}
