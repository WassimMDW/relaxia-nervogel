export type OrderTotals = {
  subtotal: number
  deliveryFee: number
  total: number
  balanceDue: number
}

export function calculateOrder({
  quantity,
  unitPrice,
  deliveryFee,
}: {
  quantity: number
  unitPrice: number
  deliveryFee: number
}): OrderTotals {
  const normalizedQuantity = Number.isFinite(quantity) ? Math.max(1, Math.floor(quantity)) : 1
  const subtotal = normalizedQuantity * unitPrice
  const total = subtotal + deliveryFee

  return {
    subtotal,
    deliveryFee,
    total,
    balanceDue: total,
  }
}
