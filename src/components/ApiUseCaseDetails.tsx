import { useEffect, useState, type CSSProperties } from 'react'

const shellStyle: CSSProperties = {
  display: 'grid',
  gap: '0.7rem',
  marginTop: '1rem',
  color: '#17362f',
}

const detailsStyle: CSSProperties = {
  border: '1px solid rgba(17, 46, 40, 0.16)',
  borderRadius: '0.95rem',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.62)',
}

const summaryStyle: CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  padding: '0.9rem 1rem',
  listStyle: 'none',
}

const contentStyle: CSSProperties = {
  borderTop: '1px solid rgba(17, 46, 40, 0.12)',
  padding: '1rem',
}

const infoGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
  gap: '0.65rem',
}

const infoCardStyle: CSSProperties = {
  display: 'grid',
  alignContent: 'start',
  gap: '0.38rem',
  minHeight: '6.4rem',
  padding: '0.8rem 0.85rem',
  border: '1px solid rgba(17, 46, 40, 0.12)',
  borderRadius: '0.75rem',
  background: 'rgba(255, 255, 255, 0.76)',
}

const infoLabelStyle: CSSProperties = {
  fontSize: '0.72rem',
  fontWeight: 900,
  letterSpacing: '0.06em',
  color: 'var(--color-orange)',
}

const infoTextStyle: CSSProperties = {
  fontSize: '0.86rem',
  fontWeight: 700,
  lineHeight: 1.55,
}

const imageGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '0.8rem',
  marginTop: '0.85rem',
}

const figureStyle: CSSProperties = {
  margin: 0,
}

const imageStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  height: 'auto',
  borderRadius: '0.7rem',
  border: '1px solid rgba(17, 46, 40, 0.14)',
  background: '#fff',
  cursor: 'zoom-in',
}

const captionStyle: CSSProperties = {
  marginTop: '0.4rem',
  fontSize: '0.75rem',
  lineHeight: 1.45,
  opacity: 0.68,
}

const zoomButtonStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'zoom-in',
  font: 'inherit',
  color: 'inherit',
}

const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(1rem, 4vw, 3rem)',
  background: 'rgba(9, 29, 25, 0.88)',
  cursor: 'zoom-out',
}

const lightboxImageStyle: CSSProperties = {
  maxWidth: '92vw',
  maxHeight: '88vh',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '0.6rem',
  background: '#fff',
  boxShadow: '0 24px 70px rgba(0, 0, 0, 0.5)',
  cursor: 'default',
}

const closeButtonStyle: CSSProperties = {
  position: 'fixed',
  top: 'clamp(0.8rem, 2.5vw, 1.6rem)',
  right: 'clamp(0.8rem, 2.5vw, 1.6rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.7rem',
  height: '2.7rem',
  fontSize: '1.7rem',
  lineHeight: 1,
  color: '#fbfaf5',
  background: 'rgba(0, 0, 0, 0.42)',
  border: '1px solid rgba(251, 250, 245, 0.55)',
  borderRadius: '999px',
  cursor: 'pointer',
}

function asset(name: string) {
  return `${import.meta.env.BASE_URL}use-cases/${name}`
}

type ZoomImageProps = {
  src: string
  alt: string
  onZoom: (src: string, alt: string) => void
}

function ZoomImage({ src, alt, onZoom }: ZoomImageProps) {
  return (
    <button
      type="button"
      style={zoomButtonStyle}
      onClick={() => onZoom(src, alt)}
      aria-label={`${alt} · 확대해서 보기`}
    >
      <img src={src} loading="lazy" alt={alt} style={imageStyle} />
    </button>
  )
}

export function ApiUseCaseDetails() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt })
  const closeLightbox = () => setLightbox(null)

  return (
    <div style={shellStyle}>
      <details style={detailsStyle}>
        <summary style={summaryStyle}>
          <span style={{ display: 'grid', gap: '0.18rem' }}>
            <small style={{ fontWeight: 900, letterSpacing: '0.05em', opacity: 0.58 }}>PI본부 · 6월 USE CASE</small>
            <strong>KISCON 건설업체 조회 · 협력업체 교차 분석기</strong>
          </span>
          <b style={{ whiteSpace: 'nowrap', fontSize: '0.82rem' }}>원본 화면 · 상세 보기 ＋</b>
        </summary>
        <div style={contentStyle}>
          <div style={infoGridStyle}>
            <div style={infoCardStyle}>
              <small style={infoLabelStyle}>목적</small>
              <span style={infoTextStyle}>공공 건설업체 데이터와 사내 협력업체 목록 비교</span>
            </div>
            <div style={infoCardStyle}>
              <small style={infoLabelStyle}>핵심 절차</small>
              <span style={infoTextStyle}>API Key 발급 → HTML 도구 연결 → 업체 조회 → CSV 업로드 → 교차분석</span>
            </div>
            <div style={infoCardStyle}>
              <small style={infoLabelStyle}>산출물</small>
              <span style={infoTextStyle}>등록업체 · 비등록 후보 · 확인 필요 업체 목록</span>
            </div>
          </div>
          <div style={imageGridStyle}>
            <figure style={figureStyle}>
              <ZoomImage
                src={asset('kiscon-api-key.webp')}
                alt="Copilot 프롬프트에 KISCON API Key를 입력하는 원본 Use Case 화면"
                onZoom={openLightbox}
              />
              <figcaption style={captionStyle}>좌 · Copilot 프롬프트에 KISCON API Key 입력</figcaption>
            </figure>
            <figure style={figureStyle}>
              <ZoomImage
                src={asset('kiscon-result.webp')}
                alt="KISCON 데이터 수집과 협력업체 교차분석 결과를 보여주는 원본 Use Case 화면"
                onZoom={openLightbox}
              />
              <figcaption style={captionStyle}>우 · KISCON 조회 및 협력업체 CSV 교차분석 결과</figcaption>
            </figure>
          </div>
        </div>
      </details>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>
          <span style={{ display: 'grid', gap: '0.18rem' }}>
            <small style={{ fontWeight: 900, letterSpacing: '0.05em', opacity: 0.58 }}>개발사업부 · 6월 USE CASE</small>
            <strong>개발사업 계약서 법률 리스크 분석 시스템</strong>
          </span>
          <b style={{ whiteSpace: 'nowrap', fontSize: '0.82rem' }}>원본 화면 · 상세 보기 ＋</b>
        </summary>
        <div style={contentStyle}>
          <div style={infoGridStyle}>
            <div style={infoCardStyle}>
              <small style={infoLabelStyle}>목적</small>
              <span style={infoTextStyle}>계약 리스크와 관련 법령 · 최신 법령 후보 확인</span>
            </div>
            <div style={infoCardStyle}>
              <small style={infoLabelStyle}>핵심 절차</small>
              <span style={infoTextStyle}>계약서 분석 → 국가법령 API 연결 → 법령 검색 → 리스크 요약 · 검증</span>
            </div>
            <div style={infoCardStyle}>
              <small style={infoLabelStyle}>산출물</small>
              <span style={infoTextStyle}>조항별 리스크 · 관련 법령 후보 · 최종 요약표 · 검증 체크리스트</span>
            </div>
          </div>
          <div style={imageGridStyle}>
            <figure style={figureStyle}>
              <ZoomImage
                src={asset('contract-api-input.webp')}
                alt="계약서 분석 HTML에 국가법령 API Key와 검토 조건을 입력하는 원본 Use Case 화면"
                onZoom={openLightbox}
              />
              <figcaption style={captionStyle}>좌 · 계약서 · 검토조건 · 국가법령 API Key 입력</figcaption>
            </figure>
            <figure style={figureStyle}>
              <ZoomImage
                src={asset('contract-result.webp')}
                alt="계약서 법률 리스크 분석의 최종 요약표와 검증 체크리스트 원본 Use Case 화면"
                onZoom={openLightbox}
              />
              <figcaption style={captionStyle}>우 · 최종 리스크 요약표와 검증 체크리스트</figcaption>
            </figure>
          </div>
        </div>
      </details>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          style={overlayStyle}
          onClick={closeLightbox}
        >
          <button
            type="button"
            style={closeButtonStyle}
            aria-label="확대 이미지 닫기"
            onClick={closeLightbox}
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={lightboxImageStyle}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
