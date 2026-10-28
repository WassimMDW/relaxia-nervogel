declare global {
  interface MetaPixelFunction {
    (...args: unknown[]): void
    callMethod?: (...args: unknown[]) => void
    queue?: unknown[][]
  }

  interface Window {
    fbq?: MetaPixelFunction
    _fbq?: MetaPixelFunction
  }
}

let initialized = false

function getCookie(name: string) {
  const prefix = `${name}=`
  const cookie = document.cookie.split('; ').find((item) => item.startsWith(prefix))
  return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : undefined
}

function getFbc() {
  const existingFbc = getCookie('_fbc')
  if (existingFbc) return existingFbc

  const fbclid = new URL(window.location.href).searchParams.get('fbclid')
  if (!fbclid) return undefined

  return `fb.1.${Date.now()}.${fbclid}`
}

function createEventId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export function initMetaPixel() {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim()
  if (!pixelId || initialized || typeof window === 'undefined') return

  initialized = true

  const fbq: MetaPixelFunction = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args)
      return
    }
    fbq.queue?.push(args)
  }
  fbq.queue = []

  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq('init', pixelId)
  trackMetaEvent('PageView')
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (!import.meta.env.VITE_META_PIXEL_ID?.trim() || !window.fbq) return

  const eventId = createEventId()
  if (parameters) {
    window.fbq('track', eventName, parameters, { eventID: eventId })
  } else {
    window.fbq('track', eventName, {}, { eventID: eventId })
  }

  void fetch('/api/meta-events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: getCookie('_fbp'),
      fbc: getFbc(),
      custom_data: parameters,
    }),
  }).catch((error) => {
    console.warn('Meta Conversion API event was not sent:', error)
  })
}
