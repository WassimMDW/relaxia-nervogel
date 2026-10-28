declare global {
  interface MetaPixelFunction {
    (...args: unknown[]): void
    q?: unknown[][]
  }

  interface Window {
    fbq?: MetaPixelFunction
    _fbq?: MetaPixelFunction
  }
}

let initialized = false

export function initMetaPixel() {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim()
  if (!pixelId || initialized || typeof window === 'undefined') return

  initialized = true

  const fbq: MetaPixelFunction = function (...args: unknown[]) {
    if (fbq.q) {
      fbq.q.push(args)
      return
    }
    fbq.q = [args]
  }
  fbq.q = []

  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (!import.meta.env.VITE_META_PIXEL_ID?.trim() || !window.fbq) return

  if (parameters) {
    window.fbq('track', eventName, parameters)
  } else {
    window.fbq('track', eventName)
  }
}
