export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const pixelId = process.env.META_PIXEL_ID
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN
  if (!pixelId || !accessToken) {
    return response.status(503).json({ error: 'Meta Conversion API is not configured' })
  }

  let body
  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
  } catch {
    return response.status(400).json({ error: 'Invalid JSON body' })
  }

  const eventName = typeof body?.event_name === 'string' ? body.event_name : ''
  const allowedEvents = new Set(['PageView', 'ViewContent', 'InitiateCheckout'])
  if (!allowedEvents.has(eventName)) {
    return response.status(400).json({ error: 'Invalid event name' })
  }

  const eventId = typeof body?.event_id === 'string' ? body.event_id : ''
  if (!eventId) {
    return response.status(400).json({ error: 'Missing event ID' })
  }

  const forwardedFor = request.headers['x-forwarded-for']
  const clientIp = typeof forwardedFor === 'string'
    ? forwardedFor.split(',')[0].trim()
    : undefined

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: 'website',
    event_source_url: typeof body?.event_source_url === 'string'
      ? body.event_source_url
      : request.headers.referer,
    user_data: {
      ...(clientIp ? { client_ip_address: clientIp } : {}),
      ...(request.headers['user-agent'] ? { client_user_agent: request.headers['user-agent'] } : {}),
      ...(typeof body?.fbp === 'string' ? { fbp: body.fbp } : {}),
      ...(typeof body?.fbc === 'string' ? { fbc: body.fbc } : {}),
    },
    custom_data: typeof body?.custom_data === 'object' && body.custom_data !== null
      ? body.custom_data
      : {},
  }

  const graphResponse = await fetch(`https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: [event] }),
  })

  if (!graphResponse.ok) {
    const detail = await graphResponse.text()
    console.error('Meta Conversion API error:', detail)
    return response.status(502).json({ error: 'Meta Conversion API request failed' })
  }

  return response.status(200).json({ success: true })
}
