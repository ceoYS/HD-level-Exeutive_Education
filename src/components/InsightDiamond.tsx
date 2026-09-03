import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

const steps = [
  ['EMPATHIZE', '공감하기', '현업에서 발생하는 pain point를 발굴합니다.'],
  ['DEFINE', '문제 정의', '무엇이 진짜 문제인지 좁히고 해결할 Pain Point를 명확히 정의합니다.'],
  ['IDEATE', '아이디어 도출', 'AI와 여러 해결 방법과 제품 형태를 조사·비교하며 정확하고 빠른 방법을 확보합니다.'],
  ['PROTOTYPE', '프로토타입', 'AI 바이브코딩으로 핵심적인 기능만을 담은 제품을 빠르게 제작합니다.'],
  ['TEST', '테스트', '직접 사용해보며, 고쳐야 할 점들을 피드백 하여 제품을 고도화 합니다.'],
]

const stagePositions = [
  ['13%', '45%'],
  ['30%', '66%'],
  ['50%', '30%'],
  ['70%', '65%'],
  ['88%', '43%'],
]

export function InsightDiamond() {
  const canvasHostRef = useRef<HTMLDivElement>(null)
  const [visualState, setVisualState] = useState<'loading' | 'ready' | 'fallback'>('loading')

  useEffect(() => {
    const host = canvasHostRef.current
    if (!host) return

    let disposed = false
    let animationFrame = 0
    let resizeObserver: ResizeObserver | undefined
    let intersectionObserver: IntersectionObserver | undefined
    let isVisible = true
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const init = async () => {
      try {
        const threeModuleUrl = 'https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js'
        const THREE = await import(/* @vite-ignore */ threeModuleUrl)
        if (disposed) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
        camera.position.set(0, 0.2, 11.8)
        camera.lookAt(0, 0, 0)

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
        renderer.setClearColor(0x000000, 0)
        renderer.outputColorSpace = THREE.SRGBColorSpace
        host.replaceChildren(renderer.domElement)

        const attractors = [
          new THREE.Vector3(-4.45, 0.65, 0),
          new THREE.Vector3(-2.2, -1.05, 0.3),
          new THREE.Vector3(0, 1.35, -0.25),
          new THREE.Vector3(2.2, -1, 0.25),
          new THREE.Vector3(4.35, 0.55, 0),
        ]

        const rootStyle = getComputedStyle(document.documentElement)
        const signal = rootStyle.getPropertyValue('--color-signal').trim() || '#d9ff57'
        const orange = rootStyle.getPropertyValue('--color-orange').trim() || '#ff6b41'
        const mint = rootStyle.getPropertyValue('--color-mint').trim() || '#9cc7bf'
        const stageColors = [signal, mint, '#efc653', orange, signal]

        const ringGeometry = new THREE.RingGeometry(0.24, 0.285, 48)
        const outerRingGeometry = new THREE.RingGeometry(0.38, 0.395, 64)
        const dotGeometry = new THREE.CircleGeometry(0.055, 24)
        const ringGroups: any[] = []
        const ringMaterials: any[] = []

        attractors.forEach((position, index) => {
          const group = new THREE.Group()
          group.position.copy(position)

          const ringMaterial = new THREE.MeshBasicMaterial({
            color: stageColors[index],
            transparent: true,
            opacity: 0.66,
            side: THREE.DoubleSide,
            depthWrite: false,
          })
          const outerMaterial = new THREE.MeshBasicMaterial({
            color: stageColors[index],
            transparent: true,
            opacity: 0.16,
            side: THREE.DoubleSide,
            depthWrite: false,
          })
          const dotMaterial = new THREE.MeshBasicMaterial({
            color: stageColors[index],
            transparent: true,
            opacity: 0.95,
            depthWrite: false,
          })

          group.add(new THREE.Mesh(ringGeometry, ringMaterial))
          group.add(new THREE.Mesh(outerRingGeometry, outerMaterial))
          group.add(new THREE.Mesh(dotGeometry, dotMaterial))
          scene.add(group)
          ringGroups.push(group)
          ringMaterials.push(ringMaterial, outerMaterial, dotMaterial)
        })

        const curve = new THREE.CatmullRomCurve3(attractors, true, 'centripetal', 0.55)
        const curveGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(180))
        const curveMaterial = new THREE.LineDashedMaterial({
          color: '#ffffff',
          transparent: true,
          opacity: 0.14,
          dashSize: 0.11,
          gapSize: 0.1,
          depthWrite: false,
        })
        const curveLine = new THREE.Line(curveGeometry, curveMaterial)
        curveLine.computeLineDistances()
        scene.add(curveLine)

        const widthAtInit = Math.max(host.clientWidth, 320)
        const particleCount = widthAtInit < 720 ? 3200 : 6800
        const positions = new Float32Array(particleCount * 3)
        const velocities = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)
        const targets = new Uint8Array(particleCount)
        const dwell = new Float32Array(particleCount)
        const dwellThreshold = new Float32Array(particleCount)

        const slowColor = new THREE.Color(signal)
        const fastColor = new THREE.Color(orange)

        const resetParticle = (index: number, targetIndex = index % attractors.length) => {
          const base = index * 3
          const sourceIndex = (targetIndex + attractors.length - 1) % attractors.length
          const source = attractors[sourceIndex]
          const target = attractors[targetIndex]
          const progress = Math.random()

          positions[base] = source.x * (1 - progress) + target.x * progress + (Math.random() - 0.5) * 0.8
          positions[base + 1] = source.y * (1 - progress) + target.y * progress + (Math.random() - 0.5) * 0.65
          positions[base + 2] = source.z * (1 - progress) + target.z * progress + (Math.random() - 0.5) * 1.1
          velocities[base] = (Math.random() - 0.5) * 0.018
          velocities[base + 1] = (Math.random() - 0.5) * 0.018
          velocities[base + 2] = (Math.random() - 0.5) * 0.012
          targets[index] = targetIndex
          dwell[index] = 0
          dwellThreshold[index] = 0.15 + Math.random() * 0.75
        }

        for (let index = 0; index < particleCount; index += 1) {
          resetParticle(index, index % attractors.length)
        }

        const particleGeometry = new THREE.BufferGeometry()
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        const positionAttribute = particleGeometry.getAttribute('position')
        const colorAttribute = particleGeometry.getAttribute('color')

        const particleMaterial = new THREE.PointsMaterial({
          size: widthAtInit < 720 ? 0.055 : 0.042,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.86,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
        const particles = new THREE.Points(particleGeometry, particleMaterial)
        particles.frustumCulled = false
        scene.add(particles)

        const pointer = { x: 0, y: 0 }
        const onPointerMove = (event: PointerEvent) => {
          const rect = host.getBoundingClientRect()
          pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
          pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
        }
        const onPointerLeave = () => {
          pointer.x = 0
          pointer.y = 0
        }
        host.addEventListener('pointermove', onPointerMove)
        host.addEventListener('pointerleave', onPointerLeave)

        const resize = () => {
          const width = Math.max(host.clientWidth, 1)
          const height = Math.max(host.clientHeight, 1)
          renderer.setSize(width, height, false)
          camera.aspect = width / height
          camera.updateProjectionMatrix()
        }

        resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(host)
        resize()

        intersectionObserver = new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting
        }, { rootMargin: '160px 0px' })
        intersectionObserver.observe(host)

        const fixedDelta = 1 / 60
        const maxSpeed = 0.072
        let previousTime = performance.now()

        const updateParticles = (time: number) => {
          const elapsed = Math.min(2, (time - previousTime) / 16.67)
          previousTime = time

          for (let index = 0; index < particleCount; index += 1) {
            const base = index * 3
            const targetIndex = targets[index]
            const target = attractors[targetIndex]

            let px = positions[base]
            let py = positions[base + 1]
            let pz = positions[base + 2]
            let vx = velocities[base]
            let vy = velocities[base + 1]
            let vz = velocities[base + 2]

            const dx = target.x - px
            const dy = target.y - py
            const dz = target.z - pz
            const distanceSquared = dx * dx + dy * dy + dz * dz + 0.16
            const distance = Math.sqrt(distanceSquared)
            const inverseDistance = 1 / distance

            const attraction = 0.0038 + 0.0105 / distanceSquared
            vx += dx * inverseDistance * attraction * elapsed
            vy += dy * inverseDistance * attraction * elapsed
            vz += dz * inverseDistance * attraction * 0.72 * elapsed

            const spin = (0.0019 + 0.0045 / distanceSquared) * (targetIndex % 2 === 0 ? 1 : -1)
            vx += -dy * spin * elapsed
            vy += dx * spin * elapsed
            vz += Math.sin(index * 0.19 + time * 0.0015) * 0.00016 * elapsed

            vx *= 0.965
            vy *= 0.965
            vz *= 0.97

            const speed = Math.sqrt(vx * vx + vy * vy + vz * vz)
            if (speed > maxSpeed) {
              const scale = maxSpeed / speed
              vx *= scale
              vy *= scale
              vz *= scale
            }

            px += vx * elapsed
            py += vy * elapsed
            pz += vz * elapsed

            if (distance < 0.48) {
              dwell[index] += fixedDelta * elapsed
              if (dwell[index] > dwellThreshold[index]) {
                if (targetIndex === attractors.length - 1) {
                  const roll = Math.random()
                  targets[index] = roll < 0.62 ? 0 : roll < 0.82 ? 1 : 2
                } else {
                  targets[index] = targetIndex + 1
                }
                dwell[index] = 0
                dwellThreshold[index] = 0.15 + Math.random() * 0.75
              }
            }

            if (Math.abs(px) > 6.2 || Math.abs(py) > 3.7 || Math.abs(pz) > 3.2) {
              resetParticle(index, targets[index])
              continue
            }

            positions[base] = px
            positions[base + 1] = py
            positions[base + 2] = pz
            velocities[base] = vx
            velocities[base + 1] = vy
            velocities[base + 2] = vz

            const normalizedSpeed = Math.min(1, speed / maxSpeed)
            colors[base] = slowColor.r + (fastColor.r - slowColor.r) * normalizedSpeed
            colors[base + 1] = slowColor.g + (fastColor.g - slowColor.g) * normalizedSpeed
            colors[base + 2] = slowColor.b + (fastColor.b - slowColor.b) * normalizedSpeed
          }

          positionAttribute.needsUpdate = true
          colorAttribute.needsUpdate = true
        }

        const renderFrame = (time: number) => {
          if (disposed) return

          if (isVisible) {
            if (!prefersReducedMotion) updateParticles(time)

            const targetCameraX = pointer.x * 0.42
            const targetCameraY = 0.2 - pointer.y * 0.24
            camera.position.x += (targetCameraX - camera.position.x) * 0.035
            camera.position.y += (targetCameraY - camera.position.y) * 0.035
            camera.lookAt(0, 0, 0)

            ringGroups.forEach((group, index) => {
              group.rotation.z = time * 0.0002 * (index % 2 === 0 ? 1 : -1) + index * 0.45
            })

            renderer.render(scene, camera)
          }

          animationFrame = requestAnimationFrame(renderFrame)
        }

        if (prefersReducedMotion) {
          renderer.render(scene, camera)
        }
        animationFrame = requestAnimationFrame(renderFrame)
        setVisualState('ready')

        return () => {
          host.removeEventListener('pointermove', onPointerMove)
          host.removeEventListener('pointerleave', onPointerLeave)
          resizeObserver?.disconnect()
          intersectionObserver?.disconnect()
          cancelAnimationFrame(animationFrame)
          particleGeometry.dispose()
          particleMaterial.dispose()
          curveGeometry.dispose()
          curveMaterial.dispose()
          ringGeometry.dispose()
          outerRingGeometry.dispose()
          dotGeometry.dispose()
          ringMaterials.forEach((material) => material.dispose())
          renderer.dispose()
          renderer.domElement.remove()
        }
      } catch {
        if (!disposed) setVisualState('fallback')
        return undefined
      }
    }

    let sceneCleanup: (() => void) | undefined
    void init().then((cleanup) => {
      sceneCleanup = cleanup
      if (disposed) sceneCleanup?.()
    })

    return () => {
      disposed = true
      sceneCleanup?.()
      resizeObserver?.disconnect()
      intersectionObserver?.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <Reveal className="design-thinking-particles">
      <div className="design-thinking-particles__copy">
        <span>DESIGN THINKING · EXECUTIVE ATTITUDE</span>
        <h3>진짜 문제를 보는 눈이<br />제품보다 먼저입니다.</h3>
        <p>
          임원진의 경험과 현업 인사이트가 <strong>Empathize · Define</strong>의 출발점이 됩니다.
          <br />
          AI 바이브코딩은 <strong>Ideate → Prototype → Test</strong>를 빠르게 반복·고도화하게 해줍니다.
        </p>
      </div>

      <div
        className={`design-thinking-particles__visual is-${visualState}`}
        aria-label="Empathize, Define, Ideate, Prototype, Test가 순환하는 Design Thinking 입자 흐름"
      >
        <div className="design-thinking-particles__canvas" ref={canvasHostRef} aria-hidden="true" />
        <div className="design-thinking-particles__labels">
          {steps.map(([english, korean], index) => (
            <div
              className={`design-thinking-particles__stage stage-${index + 1}`}
              style={{ left: stagePositions[index][0], top: stagePositions[index][1] }}
              key={english}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{english}</strong>
              <small>{korean}</small>
            </div>
          ))}
        </div>
        {visualState === 'loading' && <p className="design-thinking-particles__status">PARTICLE FLOW LOADING…</p>}
      </div>

      <ol className="design-thinking-particles__steps">
        {steps.map(([english, korean, text], index) => (
          <li key={english}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{english}</strong>
            <em>{korean}</em>
            <p>{text}</p>
          </li>
        ))}
      </ol>

      <p className="design-thinking-particles__loop-note">
        DESIGN THINKING은 일방향 절차가 아닙니다. <strong>Test에서 얻은 인사이트 및 피드백을 필요에 따라 Empathize · Define · Ideate로 돌아가 적용합니다.</strong>
      </p>
    </Reveal>
  )
}