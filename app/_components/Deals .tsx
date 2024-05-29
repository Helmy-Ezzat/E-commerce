'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from './Icons/Icons'
import ProductCard from './ProductCard'
import { useProductStore } from '../_stores/productStore'
import Link from 'next/link'

// Define rating type
interface Rating {
  rate: number
  count: number
}

// Define product type including rating
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

// Update the store to use the defined type
const Deals: React.FC = () => {
  const { products, fetchAndSetProducts } = useProductStore(
    (state) =>
      state as {
        products: Product[]
        fetchAndSetProducts: () => void
      }
  )

  useEffect(() => {
    fetchAndSetProducts()
  }, [fetchAndSetProducts])

  return (
    <section className="container mx-auto px-5 md:px0">
      <div className="flex justify-between items-center mt-6 mb-4 md:mb-8">
        <h3 className="font_public_sans font-semibold text-xl leading-8 text-right font-sans">
          أفضل العروض
        </h3>
        <div className="flex items-center justify-end">
          <Link href={'/products'}>
            <p className="font-public-sans font-semibold text-sm leading-5 text-right text-blue-500 font-sans">
              تصفح الكل
            </p>
          </Link>
          <ArrowRightIcon />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(4, 8).map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Deals
