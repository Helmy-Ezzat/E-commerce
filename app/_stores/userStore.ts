import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'

interface User {
  username: string
  password: string
  token?: string
}

interface AuthState {
  user: User | null
  login: (username: string, password: string) => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (username, password) => {
        try {
          const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          })

          if (response.ok) {
            const user = await response.json()
            set({ user })
            const token = user?.token
            if (token) {
              Cookies.set('authToken', token, { expires: 7 })
            }
          } else {
            throw new Error('Failed to login')
          }
        } catch (error) {
          console.error('Error logging in:', error)
        }
      },
    }),
    {
      name: 'auth-storage',
      //   getStorage: () => localStorage,
    }
  )
)
