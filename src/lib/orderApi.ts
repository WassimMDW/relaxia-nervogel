export type OrderPayload = {
  fullName: string
  phone: string
  city: string
  address: string
  quantity: number
  total: number
  subtotal: number
  deliveryFee: number
}

export async function submitOrder(payload: OrderPayload) {
  const response = await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Order submission failed')
  }

  return response.json()
}
