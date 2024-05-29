import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
  cart: { productId: number; quantity: number }[]
  addCart: (
    userId: number,
    products: { productId: number; quantity: number }[]
  ) => Promise<void>
  getCartCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addCart: async (userId, products) => {
        try {
          const response = await fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId,
              date: new Date().toISOString().split('T')[0], // Use the current date
              products,
            }),
          })

          if (!response.ok) {
            throw new Error('Failed to add cart')
          }

          const data = await response.json()
          set((state) => ({
            cart: [...state.cart, ...products],
          }))
          console.log('Cart added successfully:', data)
        } catch (error) {
          console.error('Error adding cart:', error)
        }
      },
      getCartCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
      getStorage: () => localStorage,
    }
  )
)
