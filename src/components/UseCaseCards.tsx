import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

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

const cardStyle: CSSProperties = {
  display: 'grid',
  gap: '0.85rem',
  padding: '1.1rem',
  border: '1px solid rgba(17, 46, 40, 0.18)',
  borderRadius: '0.95rem',
  background: 'rgba(255, 255, 255, 0.78)',
  color: '#17362f',
}

const chipStyle: CSSProperties = {
  padding: '0.35rem 0.55rem',
  border: '1px solid rgba(17, 46, 40, 0.14)',
  borderRadius: '999px',
  fontWeight: 800,
}

const flowStyle: CSSProperties = {
  padding: '0.7rem 0.8rem',
  borderRadius: '0.7rem',
  background: 'rgba(17, 46, 40, 0.07)',
  fontSize: '0.86rem',
  lineHeight: 1.55,
}

function useLightbox() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  const overlay = lightbox ? (
    <div role="dialog" aria-modal="true" aria-label={lightbox.alt} style={overlayStyle} onClick={() => setLightbox(null)}>
      <button type="button" style={closeButtonStyle} aria-label="확대 이미지 닫기" onClick={() => setLightbox(null)}>
        ×
      </button>
      <img src={lightbox.src} alt={lightbox.alt} style={lightboxImageStyle} onClick={(event) => event.stopPropagation()} />
    </div>
  ) : null

  return { open: (src: string, alt: string) => setLightbox({ src, alt }), overlay }
}

type OriginalScreensProps = {
  unit: string
  title: string
  info: [string, string][]
  images: { file: string; alt: string; caption: string }[]
  onZoom: (src: string, alt: string) => void
}

/** 원본 화면 · 상세 보기 (접이식). */
function OriginalScreens({ unit, title, info, images, onZoom }: OriginalScreensProps) {
  return (
    <details style={detailsStyle}>
      <summary style={summaryStyle}>
        <span style={{ display: 'grid', gap: '0.18rem' }}>
          <small style={{ fontWeight: 900, letterSpacing: '0.05em', opacity: 0.58 }}>{unit}</small>
          <strong>{title}</strong>
        </span>
        <b style={{ whiteSpace: 'nowrap', fontSize: '0.82rem' }}>원본 화면 · 상세 보기 ＋</b>
      </summary>
      <div style={contentStyle}>
        <div style={infoGridStyle}>
          {info.map(([label, text]) => (
            <div style={infoCardStyle} key={label}>
              <small style={infoLabelStyle}>{label}</small>
              <span style={infoTextStyle}>{text}</span>
            </div>
          ))}
        </div>
        <div style={imageGridStyle}>
          {images.map((image) => (
            <figure style={figureStyle} key={image.file}>
              <ZoomImage src={asset(image.file)} alt={image.alt} onZoom={onZoom} />
              <figcaption style={captionStyle}>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </details>
  )
}

function Card({ caseLabel, tag, title, purpose, flow, chips, children }: { caseLabel: string; tag: string; title: string; purpose: string; flow: string; chips: string[]; children: ReactNode }) {
  return (
    <div style={shellStyle}>
      <article style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <small style={{ fontWeight: 900, letterSpacing: '0.08em', color: 'var(--color-orange)' }}>{caseLabel}</small>
          <small style={{ fontWeight: 800, opacity: 0.58 }}>{tag}</small>
        </div>
        <strong style={{ fontSize: '1.05rem', lineHeight: 1.45 }}>{title}</strong>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <small style={{ fontWeight: 900, color: '#215d4c' }}>목적</small>
          <span style={{ lineHeight: 1.55 }}>{purpose}</span>
        </div>
        <div style={{ display: 'grid', gap: '0.4rem' }}>
          <small style={{ fontWeight: 900, color: '#215d4c' }}>핵심 흐름</small>
          <b style={flowStyle}>{flow}</b>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {chips.map((item) => (
            <small key={item} style={chipStyle}>{item}</small>
          ))}
        </div>
      </article>
      {children}
    </div>
  )
}

/** 구 Book02 CASE 01 · KISCON(원문). 04 LITE REFERENCE 접이식 안에서 렌더. */
export function KisconUseCaseCard() {
  const { open, overlay } = useLightbox()
  return (
    <Card
      caseLabel="CASE 01"
      tag="업체 조회 · 비교"
      title="KISCON 건설업체 조회 · 협력업체 교차 분석기"
      purpose="공공 건설업체 데이터와 사내 협력업체 목록 비교"
      flow="KISCON API 연결 → 업체정보 조회 → 사내 CSV 업로드 → 교차분석"
      chips={['등록업체 확인', '비등록 후보 확인', '검토 필요 업체 정리']}
    >
      <OriginalScreens
        unit="PI본부 · 6월 USE CASE"
        title="KISCON 건설업체 조회 · 협력업체 교차 분석기"
        info={[
          ['목적', '공공 건설업체 데이터와 사내 협력업체 목록 비교'],
          ['핵심 절차', 'API Key 발급 → HTML 도구 연결 → 업체 조회 → CSV 업로드 → 교차분석'],
          ['산출물', '등록업체 · 비등록 후보 · 확인 필요 업체 목록'],
        ]}
        images={[
          { file: 'kiscon-api-key.webp', alt: 'Copilot 프롬프트에 KISCON API Key를 입력하는 원본 Use Case 화면', caption: '좌 · Copilot 프롬프트에 KISCON API Key 입력' },
          { file: 'kiscon-result.webp', alt: 'KISCON 데이터 수집과 협력업체 교차분석 결과를 보여주는 원본 Use Case 화면', caption: '우 · KISCON 조회 및 협력업체 CSV 교차분석 결과' },
        ]}
        onZoom={open}
      />
      {overlay}
    </Card>
  )
}

/** 구 Book02 CASE 02 · 개발사업 계약서(원문). 04 CASE 2 ACTUAL LITE BUILD 접이식 안에서 렌더. */
export function ContractUseCaseCard() {
  const { open, overlay } = useLightbox()
  return (
    <Card
      caseLabel="CASE 02"
      tag="계약 검토 · 법령 확인"
      title="개발사업 계약서 법률 리스크 분석 시스템"
      purpose="계약 리스크와 관련 법령 · 최신 법령 후보를 함께 확인"
      flow="계약서 분석 → 법령 검색 API 연결 → 최신 법령 확인 → 검토 근거 보강"
      chips={['법률 리스크 정리', '관련 법령 확인', '검토 근거 확보']}
    >
      <OriginalScreens
        unit="개발사업부 · 6월 USE CASE"
        title="개발사업 계약서 법률 리스크 분석 시스템"
        info={[
          ['목적', '계약 리스크와 관련 법령 · 최신 법령 후보 확인'],
          ['핵심 절차', '계약서 분석 → 국가법령 API 연결 → 법령 검색 → 리스크 요약 · 검증'],
          ['산출물', '조항별 리스크 · 관련 법령 후보 · 최종 요약표 · 검증 체크리스트'],
        ]}
        images={[
          { file: 'contract-api-input.webp', alt: '계약서 분석 HTML에 국가법령 API Key와 검토 조건을 입력하는 원본 Use Case 화면', caption: '좌 · 계약서 · 검토조건 · 국가법령 API Key 입력' },
          { file: 'contract-result.webp', alt: '계약서 법률 리스크 분석의 최종 요약표와 검증 체크리스트 원본 Use Case 화면', caption: '우 · 최종 리스크 요약표와 검증 체크리스트' },
        ]}
        onZoom={open}
      />
      {overlay}
    </Card>
  )
}

/** API KEY 3줄(원문). 05 W06 TIP에서 렌더. */
export function ApiKeyNotice() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto minmax(0, 1fr)',
        gap: '0.75rem 1rem',
        alignItems: 'center',
        padding: '0.85rem 1rem',
        border: '1px solid rgba(17, 46, 40, 0.18)',
        borderRadius: '0.85rem',
        background: 'rgba(17, 46, 40, 0.06)',
      }}
    >
      <strong style={{ fontSize: '0.83rem', letterSpacing: '0.06em', color: 'var(--color-orange)' }}>API KEY</strong>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem 1rem', fontSize: '0.88rem', fontWeight: 800 }}>
        <span>외부 공유 금지</span>
        <span>공개 화면 노출 금지</span>
        <span>배포 파일 포함 금지</span>
      </div>
    </div>
  )
}
