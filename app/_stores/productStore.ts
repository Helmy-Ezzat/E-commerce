import {create} from 'zustand'

interface Rating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface ProductState {
  products: Product[]
  fetchAndSetProducts: () => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchAndSetProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()
    set({ products })
  },
}))
