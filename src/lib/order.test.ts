import { describe, expect, it } from 'vitest'
import { calculateOrder } from './order'

describe('calculateOrder', () => {
  it('calculates subtotal, delivery, total and remaining balance', () => {
    const result = calculateOrder({
      quantity: 2,
      unitPrice: 79,
      deliveryFee: 7,
    })

    expect(result.subtotal).toBe(158)
    expect(result.deliveryFee).toBe(7)
    expect(result.total).toBe(165)
    expect(result.balanceDue).toBe(165)
  })
})
