'use client'
import React, { useEffect } from 'react'
import ProductCard from '../_components/ProductCard'
import Image from 'next/image'
import { useProductStore, Product } from '../_stores/productStore'

function Products() {
  const { products, fetchAndSetProducts } = useProductStore()

  useEffect(() => {
    fetchAndSetProducts()
  }, [fetchAndSetProducts])

  console.log(products)

  return (
    <section className="container mx-auto px-5 md:px-0">
      <Image
        className="w-full h-[40rem] mb-5"
        src="/assets/banners/gradient-background-cyber-monday-sales_52683-142802 1.png"
        width={1234}
        height={591}
        alt="Fast Cart"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 col-span-4">
        {products.map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Products
