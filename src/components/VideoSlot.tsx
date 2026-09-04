import type { VideoSlotData } from '../content/videos'

/** Micro video slot. Renders nothing until a src is supplied — no empty "준비 중" box on the public site. */
export function VideoSlot({ video }: { video: VideoSlotData }) {
  if (!video.src) return null

  const isEmbed = /^https?:\/\//.test(video.src)
  const src = isEmbed ? video.src : `${import.meta.env.BASE_URL}${video.src.replace(/^\//, '')}`
  const poster = video.poster ? `${import.meta.env.BASE_URL}${video.poster.replace(/^\//, '')}` : undefined

  return (
    <figure className="video-slot" id={video.id}>
      <figcaption>
        <span>VIDEO {video.number}</span>
        <strong>{video.title}</strong>
        <em>{video.minutes}</em>
      </figcaption>
      {isEmbed ? (
        <iframe src={src} title={video.title} loading="lazy" allow="fullscreen" />
      ) : (
        <video controls preload="none" poster={poster} src={src} />
      )}
    </figure>
  )
}
