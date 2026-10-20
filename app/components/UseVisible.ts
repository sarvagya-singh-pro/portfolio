import { useEffect, useRef, type RefObject } from 'react'

// Tells canvas loops whether their element is on screen so off-screen canvases cost nothing.
export function useVisible(ref: RefObject<Element | null>) {
  const visible = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting }, { rootMargin: '100px' })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return visible
}