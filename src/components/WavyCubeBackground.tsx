import { useEffect, useRef } from 'react'

export function WavyCubeBackground() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let disposed = false
    let animationFrame = 0
    let resizeObserver: ResizeObserver | undefined
    let intersectionObserver: IntersectionObserver | undefined
    let isVisible = true
    let sceneCleanup: (() => void) | undefined

    const init = async () => {
      try {
        const threeModuleUrl = 'https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js'
        const THREE = await import(/* @vite-ignore */ threeModuleUrl)
        if (disposed) return undefined

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const compact = window.matchMedia('(max-width: 760px)').matches
        const columns = compact ? 12 : 24
        const rows = compact ? 8 : 15
        const spacing = compact ? 0.82 : 0.72
        const count = columns * rows

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100)
        camera.position.set(0, compact ? 7.6 : 8.8, compact ? 12.8 : 14.8)
        camera.lookAt(0, -0.4, 0)

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25))
        renderer.setClearColor(0x000000, 0)
        renderer.outputColorSpace = THREE.SRGBColorSpace
        host.replaceChildren(renderer.domElement)

        const rootStyle = getComputedStyle(document.documentElement)
        const mint = rootStyle.getPropertyValue('--color-mint').trim() || '#9cc7bf'
        const signal = rootStyle.getPropertyValue('--color-signal').trim() || '#d9ff57'

        scene.add(new THREE.AmbientLight(0xffffff, 0.7))
        const keyLight = new THREE.DirectionalLight(signal, 2.2)
        keyLight.position.set(-4, 8, 6)
        scene.add(keyLight)

        const geometry = new THREE.BoxGeometry(0.54, 0.42, 0.54)
        const material = new THREE.MeshStandardMaterial({
          color: mint,
          emissive: mint,
          emissiveIntensity: 0.08,
          roughness: 0.58,
          metalness: 0.16,
          transparent: true,
          opacity: 0.58,
          depthWrite: false,
        })
        const mesh = new THREE.InstancedMesh(geometry, material, count)
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
        mesh.frustumCulled = false
        scene.add(mesh)

        const dummy = new THREE.Object3D()
        const xOffset = ((columns - 1) * spacing) / 2
        const zOffset = ((rows - 1) * spacing) / 2

        const updateGrid = (time: number) => {
          const t = time * 0.00048
          let index = 0

          for (let row = 0; row < rows; row += 1) {
            for (let column = 0; column < columns; column += 1) {
              const x = column * spacing - xOffset
              const z = row * spacing - zOffset
              const waveA = Math.sin(x * 0.72 + t * 2.1)
              const waveB = Math.cos(z * 0.82 - t * 1.55)
              const radial = Math.sin(Math.hypot(x * 0.7, z * 0.7) - t * 1.25)
              const wave = waveA * 0.48 + waveB * 0.27 + radial * 0.18
              const height = 0.54 + (wave + 0.9) * 0.32

              dummy.position.set(x, wave * 0.62 - 0.95, z)
              dummy.rotation.set(0, Math.sin(t + x * 0.12) * 0.035, 0)
              dummy.scale.set(1, Math.max(0.42, height), 1)
              dummy.updateMatrix()
              mesh.setMatrixAt(index, dummy.matrix)
              index += 1
            }
          }

          mesh.instanceMatrix.needsUpdate = true
        }

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
        }, { rootMargin: '180px 0px' })
        intersectionObserver.observe(host)

        const renderFrame = (time: number) => {
          if (disposed) return
          if (isVisible) {
            updateGrid(reducedMotion ? 0 : time)
            renderer.render(scene, camera)
          }
          animationFrame = requestAnimationFrame(renderFrame)
        }

        updateGrid(0)
        renderer.render(scene, camera)
        if (!reducedMotion) animationFrame = requestAnimationFrame(renderFrame)

        return () => {
          resizeObserver?.disconnect()
          intersectionObserver?.disconnect()
          cancelAnimationFrame(animationFrame)
          geometry.dispose()
          material.dispose()
          renderer.dispose()
          renderer.domElement.remove()
        }
      } catch {
        host.classList.add('is-fallback')
        return undefined
      }
    }

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
    <div
      ref={hostRef}
      className="chapter-system-wave"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        opacity: 0.24,
        pointerEvents: 'none',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 78%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 78%, transparent 100%)',
      }}
    />
  )
}
