import type { CSSProperties } from 'react'

const shellStyle: CSSProperties = {
  display: 'grid',
  gap: '0.85rem',
  marginTop: '1.1rem',
}

const detailsStyle: CSSProperties = {
  border: '1px solid rgba(17, 46, 40, 0.18)',
  borderRadius: '1rem',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.72)',
}

const summaryStyle: CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  padding: '1rem 1.1rem',
  listStyle: 'none',
}

const contentStyle: CSSProperties = {
  borderTop: '1px solid rgba(17, 46, 40, 0.14)',
  padding: '1.1rem',
}

const imageGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '0.9rem',
  marginTop: '1rem',
}

const figureStyle: CSSProperties = {
  margin: 0,
}

const imageStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  height: 'auto',
  borderRadius: '0.75rem',
  border: '1px solid rgba(17, 46, 40, 0.16)',
  background: '#fff',
}

const captionStyle: CSSProperties = {
  marginTop: '0.45rem',
  fontSize: '0.78rem',
  lineHeight: 1.45,
  opacity: 0.72,
}

function asset(name: string) {
  return `${import.meta.env.BASE_URL}use-cases/${name}`
}

export function ApiUseCaseDetails() {
  return (
    <div style={shellStyle}>
      <details style={detailsStyle}>
        <summary style={summaryStyle}>
          <span style={{ display: 'grid', gap: '0.2rem' }}>
            <small style={{ fontWeight: 800, letterSpacing: '0.04em', opacity: 0.62 }}>PI본부 · 6월 USE CASE</small>
            <strong>KISCON 건설업체 조회·협력업체 교차 분석기</strong>
          </span>
          <b style={{ whiteSpace: 'nowrap' }}>원본 내용·화면 펼쳐보기 ＋</b>
        </summary>
        <div style={contentStyle}>
          <p>
            공공데이터포털의 <strong>국토교통부 KISCON 건설업체정보 Open API</strong>에서 인증키를 발급받고,
            Copilot로 만든 HTML 도구에 연결해 실제 건설업체 데이터를 수집한 뒤 사내 협력업체 CSV와 교차분석하는 사례입니다.
          </p>
          <ol>
            <li>공공데이터포털에서 KISCON 건설업체정보 Open API 활용신청</li>
            <li>일반 인증키(API Key) 발급·복사</li>
            <li>Copilot 프롬프트에 API Key를 넣어 HTML 조회·분석 도구 생성</li>
            <li>기간·지역·면허·업종 조건으로 KISCON 업체정보 수집</li>
            <li>사내 협력업체 CSV 업로드 후 등록업체·비등록 후보·확인 필요 업체 교차분석 및 CSV 다운로드</li>
          </ol>
          <div style={imageGridStyle}>
            <figure style={figureStyle}>
              <img
                src={asset('kiscon-api-key.webp')}
                loading="lazy"
                alt="Copilot 프롬프트에 KISCON API Key를 입력하는 원본 Use Case 화면"
                style={imageStyle}
              />
              <figcaption style={captionStyle}>원본 화면 · Copilot 프롬프트에 KISCON API Key 입력</figcaption>
            </figure>
            <figure style={figureStyle}>
              <img
                src={asset('kiscon-result.webp')}
                loading="lazy"
                alt="KISCON 데이터 수집과 협력업체 교차분석 결과를 보여주는 원본 Use Case 화면"
                style={imageStyle}
              />
              <figcaption style={captionStyle}>원본 화면 · KISCON 수집·협력업체 CSV 교차분석 결과</figcaption>
            </figure>
          </div>
        </div>
      </details>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>
          <span style={{ display: 'grid', gap: '0.2rem' }}>
            <small style={{ fontWeight: 800, letterSpacing: '0.04em', opacity: 0.62 }}>개발사업부 · 6월 USE CASE</small>
            <strong>개발사업 계약서 법률 리스크 분석 시스템</strong>
          </span>
          <b style={{ whiteSpace: 'nowrap' }}>원본 내용·화면 펼쳐보기 ＋</b>
        </summary>
        <div style={contentStyle}>
          <p>
            계약서 원문을 분석하는 HTML 도구에 <strong>국가법령정보 공동활용 Open API</strong> 인증키를 연결해,
            관련 법령명과 최신 법령 후보를 확인하고 계약 리스크 검토 근거를 보강하는 사례입니다.
          </p>
          <ol>
            <li>Copilot로 계약서 법률 리스크 분석용 HTML 도구 생성</li>
            <li>계약서 원문을 Markdown/TXT 등 분석 가능한 형태로 준비</li>
            <li>국가법령정보 공동활용 Open API 신청 후 API Key 발급·복사</li>
            <li>HTML에 계약서·검토 주체·계약 유형·검토 관점·법령 JSON·API Key·가이드라인 입력</li>
            <li>전체 리스크 평가 → 조항별 상세 리스크 → 최종 요약표와 검증 체크리스트 확인</li>
          </ol>
          <div style={imageGridStyle}>
            <figure style={figureStyle}>
              <img
                src={asset('contract-api-input.webp')}
                loading="lazy"
                alt="계약서 분석 HTML에 국가법령 API Key와 검토 조건을 입력하는 원본 Use Case 화면"
                style={imageStyle}
              />
              <figcaption style={captionStyle}>원본 화면 · 계약서·검토조건·국가법령 API Key 입력</figcaption>
            </figure>
            <figure style={figureStyle}>
              <img
                src={asset('contract-result.webp')}
                loading="lazy"
                alt="계약서 법률 리스크 분석의 최종 요약표와 검증 체크리스트 원본 Use Case 화면"
                style={imageStyle}
              />
              <figcaption style={captionStyle}>원본 화면 · 최종 리스크 요약표와 검증 체크리스트</figcaption>
            </figure>
          </div>
        </div>
      </details>
    </div>
  )
}
