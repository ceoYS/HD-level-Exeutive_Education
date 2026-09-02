# HDEC AI BUILD — Content Fact Check

시간에 민감한 제품·연구 주장을 기록한다. 각 항목은 **claim · source · verification date · product location · qualification/caveat**를 포함한다.

- 최종 검증일: **2026-09-02**
- 제품 내 시간 표기: `UPDATED · 2026.09`
- 원칙: 역할과 현재 공식 capability를 설명하고 순위·보편적 우열·변동이 빠른 가격/한도는 쓰지 않는다.
- HDEC 고유의 내부 상태(인프라·보안·접근 경로·활용률·개선률 등)는 공개 제품·문서에 단정해 넣지 않고 일반 원칙으로만 서술한다. 내부 전용 전제는 git-ignored 검토 노트에서만 다룬다.

## 1. External productivity benchmarks

| # | Claim used in product | Primary / high-authority source | Verified | Product location | Qualification / caveat |
| --- | --- | --- | --- | --- | --- |
| E1 | McKinsey/MGI는 E&C의 광범위한 Digital Transformation이 **14–15% productivity gain**, **4–6% cost reduction** 잠재력을 낼 수 있다고 서술한다. | [McKinsey — Decoding digital transformation in construction](https://www.mckinsey.com/capabilities/operations/our-insights/decoding-digital-transformation-in-construction) | 2026-09-02 | Book 05 뒤 `HDEC AI LEVERAGE` / External Benchmarks | **GenAI 단독 효과가 아니다.** 개별 회사의 보장된 결과도 아니다. 건설업 Digital Transformation의 potential range다. |
| E2 | Harvard/BCG 실험에서 AI capability frontier 안의 과제를 수행한 Consultant는 **25%+ 빨랐고**, human-rated performance가 **40%+**, task completion이 **12%+** 높았다. | [Harvard Business School AI Institute — Navigating the Jagged Technological Frontier](https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/) · [published paper PDF](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf) | 2026-09-02 | Book 05 뒤 / External Benchmarks | 758명 BCG Consultant의 특정 Knowledge-work task 실험이다. **건설기업 전체 생산성이나 HDEC 개선률이 아니다.** Frontier 밖의 과제에서는 이점이 동일하지 않았다. |
| E3 | Noy–Zhang 실험에서 ChatGPT를 사용한 전문직 Writing task는 completion time이 약 **40% 감소**, 평가 품질이 약 **18% 향상**됐다. | [MIT working paper — Experimental Evidence on the Productivity Effects of Generative AI](https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1_0.pdf) · [Science DOI](https://www.science.org/doi/10.1126/science.adh2586) | 2026-09-02 | Book 05 뒤 / External Benchmarks | 대학 교육을 받은 전문가가 수행한 짧고 제한된 Writing task의 결과다. **Task-specific**이며 장기 품질·복잡한 조직 Workflow·건설 현장 결과로 일반화하지 않는다. |
| E4 | RICS 2025 survey는 Construction AI adoption이 아직 초기이며, 다수 응답 조직이 미도입 또는 Pilot 단계라고 보고한다. | [RICS — Artificial intelligence in construction report 2025](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) | 2026-09-02 | Book 05 뒤 / External Benchmarks | 방향성·도입 장벽을 보여주는 2,200+명 Global survey다. **타사 대비 수치 우위나 HDEC 경쟁력 증가율을 계산하는 자료가 아니다.** |

### HDEC interpretation rule

Product copy:

> 검증 가능한 목표는 타사 대비 몇 %를 선언하는 것이 아니라, Use Case별로 현재 업무시간·오류·재작업을 먼저 측정하고, Pilot 이후 실제 개선률을 확인하는 것입니다.

HDEC의 개선률은 내부 Baseline과 Pilot 측정 전에는 제시하지 않는다. 현재 제안 KPI: Process Time, Rework, Error Rate, Search Time, Report Preparation Time, Decision Lead Time, Reuse of Knowledge, User Adoption.

## 2. Construction knowledge and adoption evidence

| # | Claim used in product | Source | Verified | Product location | Qualification / caveat |
| --- | --- | --- | --- | --- | --- |
| K1 | Construction은 fragmented/project-based 특성 때문에 Project knowledge의 capture와 reuse가 어렵다는 연구 축적이 있다. | [Dave & Koskela — Collaborative knowledge management: a construction case study](https://salford-repository.worktribe.com/output/1461831/collaborative-knowledge-management-a-construction-case-study), *Automation in Construction* 18(7), 2009 | 2026-09-02 | HDEC AI LEVERAGE / Construction Knowledge | 오래된 구조적 문제를 설명하는 Peer-reviewed case study다. 현재 모든 기업에 같은 정도로 적용된다고 단정하지 않는다. |
| K2 | Tacit knowledge는 Project task adjustment·re-sequencing 같은 문제 해결에 중요하며, Explicit KM initiative만으로 Project-based challenge가 모두 해결되지는 않는다. | [Hartmann & Dorée — Reinventing the role of the project manager in mobilising knowledge in construction](https://doi.org/10.1108/IJMPB-12-2011-0080), 2013 | 2026-09-02 | HDEC AI LEVERAGE / Tacit Knowledge | Single in-depth case study다. Tacit knowledge의 역할을 뒷받침하지만 산업 전체의 정량 추정으로 쓰지 않는다. |
| K3 | 2023 Construction lessons-learned 연구는 수집 절차가 흩어져 있고 정보가 효과적으로 재사용되지 않는 경우가 많다고 보고했다. | [Hubbard et al. — Gathering and disseminating lessons learned in construction companies](https://epress.lib.uts.edu.au/journals/index.php/AJCEB/article/view/8390), 2023 | 2026-09-02 | HDEC AI LEVERAGE / Construction Knowledge | 연구 참여 기업의 관행에 관한 결과다. HDEC 내부 현황을 직접 검증하지 않는다. |
| K4 | Construction KM literature review는 knowledge exploitation, transfer, IT와 Tacit-to-Explicit transformation의 지속적 중요성을 확인한다. | [Yepes & López — Knowledge management in the construction industry](https://journals.vilniustech.lt/index.php/JCEM/article/view/16006), 2021 | 2026-09-02 | HDEC AI LEVERAGE / Construction Knowledge | Bibliometric/literature review의 방향성 근거다. 특정 HDEC data volume이나 재사용률을 제공하지 않는다. |
| K5 | RICS 2025 survey는 adoption 장벽으로 skill, system integration, data quality 등을 제시한다. | [RICS AI in Construction 2025](https://www.rics.org/news-insights/artificial-intelligence-in-construction-report) | 2026-09-02 | HDEC AI LEVERAGE / External Benchmarks | Global sentiment survey 결과다. HDEC의 원인·우선순위를 대신하지 않는다. |

### Controlled-infrastructure framing (public)

Claim used in product:

> 민감한 사내 지식과 데이터를 권한·감사·거버넌스까지 포함해 AI와 연결하려면, 일반 소비자용 AI만으로는 운영 요구사항을 충족하기 어렵습니다. 접근 권한, 데이터 등급, 암호화, 로그, 모델 연결, 내부 검색과 거버넌스를 통제할 수 있는 '사내 통제형 AI 인프라'가 필요합니다.

- Source: 일반적인 enterprise-AI 원칙. §6 Controlled AI infrastructure와 NIST AI RMF 참조.
- 이 공개 문구는 HDEC의 현재 인프라·보안 상태나 접근 경로를 단정하지 않고 일반 원칙만 서술한다.
- No HDEC-specific data volume, utilization rate, security maturity score, or improvement percentage is asserted.
- HDEC 고유의 내부 검토 자료는 public repository에 커밋하지 않고 git-ignored 노트에만 보관한다.

## 3. AI / Assistant / Agent / Workflow / MCP / Skill

| # | Claim used in product | Official source | Verified | Product location | Qualification / caveat |
| --- | --- | --- | --- | --- | --- |
| C1 | Agent는 LLM이 Workflow execution을 관리하고, context/result를 보며 Tool을 동적으로 고르고, Guardrail 아래 여러 action을 수행하는 System이다. | [OpenAI — A practical guide to building AI agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) | 2026-09-02 | Book 01 Ch.02 | Vendor definition을 Executive mental model로 단순화했다. Agent autonomy는 제품·권한 설정마다 다르다. |
| C2 | Workflow는 predefined code path, Agent는 LLM이 process와 tool usage를 동적으로 지휘하는 System이라는 구분이 유효하다. | [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | 2026-09-02 | Book 01 Ch.05 | 둘은 넓은 Agentic systems family 안에서 섞일 수 있다. Workflow tool을 “AI 없는 old rule-only tool”로 묘사하지 않는다. |
| C3 | ChatGPT Projects는 chats, files, custom instructions, tools를 한 Workspace에 유지한다. | [OpenAI Help — Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) | 2026-09-02 | Book 01 Ch.02, Ch.07 | Project 자체가 자동으로 Autonomous Agent라는 뜻은 아니다. Plan·subscription에 따라 추가 Tool/Agent capability가 달라질 수 있다. |
| C4 | Claude Projects는 self-contained workspace에 chat histories, knowledge base, project instructions를 둔다. | [Anthropic Help — What are projects?](https://support.anthropic.com/en/articles/9517075-what-are-projects) | 2026-09-02 | Book 01 Ch.02, Ch.07 | Project는 planning/context surface의 예다. Product limit·pricing 비교는 다루지 않는다. |
| C5 | NotebookLM 답변은 Notebook source에 Grounding되고 inline citation을 제공한다. Audio Overview 등 source transformation 기능이 있다. | [Google NotebookLM Help — Learn about NotebookLM](https://support.google.com/notebooklm/answer/16164461?hl=en) | 2026-09-02 | Book 01 Ch.03 Tool Map | NotebookLM과 Gemini integration의 Grounding 방식은 다르다. “내 자료에서만”은 NotebookLM chat 기준이다. |
| C6 | MCP는 LLM application을 External data sources와 tools에 연결하는 Open protocol이다. | [Model Context Protocol specification](https://modelcontextprotocol.io/specification/2025-03-26/index) | 2026-09-02 | Book 01 Ch.05 | Executive copy는 “연결 방식을 표준화한 연결 규격”으로 단순화한다. Standard connection이 곧 access approval/security를 보장하지 않는다. |
| C7 | Skill은 특정 Workflow를 반복하기 위한 reusable instructions/resources의 묶음으로 설명할 수 있다. | [OpenAI — AI-native company workflows](https://openai.com/index/ai-native-company-workflows/) · [Figma Make custom skills](https://www.figma.com/make/) | 2026-09-02 | Book 01 Ch.05 | Vendor implementation은 서로 다르다. Course에서는 “재사용 가능한 작업법/절차”라는 stable concept만 가르친다. |

## 4. AI Capability Map — official product verification

Tool Map은 **Job category별 대표 예시**다. 하나의 Tool이 여러 Category에 나타날 수 있으며, 순위나 공식 HDEC 승인 목록이 아니다.

| Job / products shown | Official verification | Verified | Product location | Qualification / caveat |
| --- | --- | --- | --- | --- |
| THINK / WRITE / RESEARCH — ChatGPT | [ChatGPT Capabilities Overview](https://help.openai.com/en/articles/9260256-prompt-engineering-best-practices-for-chatgpt) · [Deep research](https://help.openai.com/en/articles/10500283-deep-research) | 2026-09-02 | Ch.03 Tool Map | Search, file/image analysis, generation, research capability 수준만 기록. Model name·usage limit는 제외. |
| THINK / WRITE / RESEARCH — Claude | [Anthropic — Meet Claude](https://www.anthropic.com/claude) · [Claude Projects](https://support.anthropic.com/en/articles/9517075-what-are-projects) | 2026-09-02 | Ch.03 | Writing, document analysis, research/citation, Artifact capability의 대표 role. |
| THINK / WRITE / RESEARCH — Gemini | [Google — Gemini Canvas and Audio Overview](https://blog.google/products-and-platforms/products/gemini/gemini-collaboration-features/) | 2026-09-02 | Ch.03 | Canvas가 document/code Prototype을 지원한다. 세부 모델·plan은 표시하지 않는다. |
| KNOWLEDGE — NotebookLM | [Google NotebookLM Help](https://support.google.com/notebooklm/answer/16164461?hl=en) | 2026-09-02 | Ch.03 | Source-grounded Notebook use case. General autonomous web agent로 묘사하지 않는다. |
| IMAGE — ChatGPT Images / Gemini / Adobe Firefly | [OpenAI ChatGPT capabilities](https://help.openai.com/en/articles/9260256-prompt-engineering-best-practices-for-chatgpt) · [Adobe Firefly](https://www.adobe.com/products/firefly.html) | 2026-09-02 | Ch.03 | Generate/edit role 수준. Commercial-use rights와 data policy는 Tool/plan별 별도 확인. |
| VIDEO — Higgsfield / Google Flow·Veo / Adobe Firefly | [Higgsfield official](https://higgsfield.ai/) · [Google DeepMind Veo](https://deepmind.google/models/veo/) · [Adobe Firefly](https://www.adobe.com/products/firefly.html) | 2026-09-02 | Ch.03 | 현재 주요 예시. “best” claim 없음. Availability, model roster, resolution은 변동하므로 제외. |
| MUSIC / AUDIO — Suno / ElevenLabs / NotebookLM | [Suno Studio 2.0](https://suno.com/blog/studio-2) · [ElevenLabs official](https://elevenlabs.io/) · [NotebookLM Audio Overview](https://support.google.com/notebooklm/answer/16212820?hl=en) | 2026-09-02 | Ch.03 | Music/voice/dubbing/source-audio roles. Copyright, likeness, commercial rights는 plan과 use case별 확인. |
| UI / DESIGN — Figma Make / Claude Artifacts / Gemini Canvas | [Figma Make](https://www.figma.com/make/) · [Anthropic Artifacts Help](https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them) · [Google Gemini Canvas](https://blog.google/products-and-platforms/products/gemini/gemini-collaboration-features/) | 2026-09-02 | Ch.03 | Interactive Prototype 생성 role. Prototype과 Production readiness는 분리해 설명한다. |
| BUILD / CODE — Claude Code | [Anthropic Claude Code docs](https://docs.anthropic.com/en/docs/claude-code/getting-started) | 2026-09-02 | Ch.03, Ch.07 | Terminal-based coding environment 예. Command tutorial은 Course에서 제거. |
| BUILD / CODE — Codex CLI | [OpenAI Help — Codex CLI](https://help.openai.com/en/articles/11096431) | 2026-09-02 | Ch.03, Ch.07 | Local terminal에서 code를 read/modify/run하는 Coding Agent. Cloud products와 혼동하지 않게 `Codex CLI` 표기. |
| BUILD / CODE — Cursor | [Cursor Agent docs](https://cursor.com/docs/agent/overview) | 2026-09-02 | Ch.03, Ch.07 | Editor 안에서 codebase search, edit, terminal, browser/tool use. IDE / agent-first example. |
| BUILD / CODE — Google Antigravity | [Google Developers Blog — Antigravity](https://developers.googleblog.com/en/build-with-google-antigravity-our-new-agentic-development-platform/) | 2026-09-02 | Ch.03, Ch.07 | Editor, terminal, browser across agent-first development platform. Version number는 제외. |
| AUTOMATE — n8n | [n8n Features](https://n8n.io/features/) · [n8n AI Agents](https://n8n.io/ai-agents/) | 2026-09-02 | Ch.03, Ch.05 | Deterministic steps, AI Agent, code, human approval를 결합할 수 있다. Rule-only로 설명하지 않는다. |
| AUTOMATE — Zapier | [Zapier Agents Help](https://help.zapier.com/hc/en-us/articles/24393442652557-Build-an-agent-in-Zapier-Agents) · [Start an Agent from a Zap](https://help.zapier.com/hc/en-us/articles/35859160812685-Start-an-agent-from-a-Zap) | 2026-09-02 | Ch.03, Ch.05 | Zap workflow와 Agents가 결합될 수 있다. App count·usage limit은 변동하므로 Product copy에서 제외. |
| AUTOMATE — Make | [Make AI Agents](https://www.make.com/en/ai-agents) | 2026-09-02 | Ch.03, Ch.05 | Visual workflow 안에서 adaptive AI decision과 transparent automation을 결합. |
| AUTOMATE — Power Automate | [Microsoft Learn — Power Automate](https://learn.microsoft.com/en-us/power-automate/) · [Microsoft Agentic Automation Adoption Guide](https://adoption.microsoft.com/files/agents/AgenticAutomationAdoptionGuide.pdf) | 2026-09-02 | Ch.03, Ch.05 | Cloud/Desktop flow와 AI/Copilot/agentic automation family. 구체적 licensing은 제외. |
| AGENT — ChatGPT agent / Copilot Studio / coding agents / automation agents | [OpenAI Deep Research & Agent](https://openai.com/index/introducing-deep-research/) · [OpenAI Agent guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) · 위 Coding/Automation sources | 2026-09-02 | Ch.03 | Agent autonomy·tool access는 plan, policy, configuration에 따라 달라진다. Custom Project/GPT/Gem과 자동 동치가 아니다. |

## 5. AI development workflow / Harness / Spec Kit / GitHub

| # | Claim used in product | Official source | Verified | Product location | Qualification / caveat |
| --- | --- | --- | --- | --- | --- |
| D1 | GitHub Spec Kit의 core SDD flow는 **Spec → Plan → Tasks → Implement**다. | [GitHub Spec Kit docs](https://github.github.com/spec-kit/) · [GitHub repository README](https://github.com/github/spec-kit/blob/main/README.md) | 2026-09-02 | Book 01 Ch.07 | Real example이지 mandatory universal workflow가 아니다. |
| D2 | Review는 another agent/model뿐 아니라 Tests, Build, Lint, Browser/Visual inspection을 결합할 수 있다. | Coding-agent official docs above; repository validation practice | 2026-09-02 | Book 01 Ch.07 | Course workflow synthesis다. Founder example(Claude Code builds → Codex reviews → planner re-evaluates)은 예시일 뿐 제품 권장 조합으로 주장하지 않는다. |
| D3 | Harness는 이 Course에서 여러 개발 반복이 같은 rules/review/test/use loop로 돌아가게 하는 체계로 정의한다. | Course definition; consistent with [Cursor coding-agent explanation](https://prod.cursor.com/help/ai-features/coding-agents) and [GitHub Spec Kit](https://github.github.com/spec-kit/) | 2026-09-02 | Book 01 Ch.05, Ch.07 | Industry-wide 단일 표준 정의가 아니다. Static component list보다 operational loop를 가르치기 위한 Course definition이다. |
| D4 | GitHub는 code/version history의 remote repository이고, GitHub Pages는 일부 Static site를 host한다. Deploy target은 Vercel/Azure/AWS 등 다른 infrastructure일 수 있다. | [GitHub Docs — What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) | 2026-09-02 | Book 01 Ch.07 | GitHub 자체가 항상 Deploy/Hosting과 같다고 말하지 않는다. Repository/Commit/Branch/Push 개별 tutorial은 제거했다. |

## 6. Controlled AI infrastructure

Product framing:

- `사내 통제형 AI 인프라`는 특정 Deployment 하나가 아니다.
- 가능한 형태: On-premises, Private Cloud/VPC, approved enterprise model endpoints.
- 요구 영역: Identity/Access Control, Data Classification, Encryption, Audit Logs, Model Gateway, Usage/Cost Control, Approved Model Routing, RAG/Internal Search, Permissions, Monitoring, Governance.
- “물리 Server 한 대가 있다고 AI가 안전해지는 것은 아니다.”

Supporting authority: [NIST AI RMF 1.0](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10) and [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) emphasize lifecycle governance, mapping, measurement, monitoring, security, privacy, accountability, documentation, and human oversight. The exact architecture/control list in the Product is an executive-level synthesis, not a claim that NIST prescribes one HDEC architecture.

## 7. Publication re-check list

Before a public release after 2026.09, re-check:

- Product availability, product rename, and feature retirement.
- Pricing, usage limits, regional availability, plan-specific Tool/Agent access.
- Google Antigravity, ChatGPT agent, Claude Code, Codex, Cursor Agent current surfaces.
- Workflow products’ AI Agent packaging and Microsoft product naming.
- MCP current specification revision.
- Official HDEC security, data-classification, model, and access policies once supplied.

Never add an HDEC percentage advantage without an internal Baseline, Pilot design, measured result, and approved interpretation.
