'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ProductCard from './ProductCard'
import { useProductStore } from '../_stores/productStore'

function SuggestedProducts(): JSX.Element {
  const { products, fetchAndSetProducts } = useProductStore()
  useEffect(() => {
    fetchAndSetProducts()
  }, [fetchAndSetProducts])

  return (
    <section className="container mx-auto px-5 md:px-0">
      <div className="flex mt-6 mb-4 md:mb-8">
        <h3 className="font_public_sans font-semibold text-xl leading-8 text-right font-sans">
          منتجاتنا المقترحة
        </h3>
      </div>
      <div className="grid lg:grid-cols-5 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 col-span-4 ">
          {products.slice(8, 14).map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
        <Image
          className="max-h-[716px] hidden lg:flex"
          src="/assets/Banner 1.png"
          width={312}
          height={716}
          alt="Fast Cart"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-0 justify-between mt-8 md:flex-row">
        <Image
          src="/assets/Banner_3.png"
          width={690}
          height={300}
          alt="Fast Cart"
        />
        <Image
          src="/assets/Banner_4.png"
          width={690}
          height={300}
          alt="Fast Cart"
        />
      </div>
    </section>
  )
}

export default SuggestedProducts
