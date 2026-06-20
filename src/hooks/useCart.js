import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'storebass_cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function formatPrice(val) {
  return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function useCart() {
  const [cart, setCart] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id, delta) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id)
      if (!item) return prev
      const newQty = item.quantity + delta
      if (newQty <= 0) return prev.filter(i => i.id !== id)
      return prev.map(i => i.id === id ? { ...i, quantity: newQty } : i)
    })
  }, [])

  return {
    cart,
    isOpen,
    setIsOpen,
    totalCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    formatPrice,
  }
}
