'use client'
import { useCartStore } from '@/app/_stores/cartStore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function ProductDetails({ params }) {
  const [product, setProduct] = useState(null)

  let productId = params.productId
  const getProductDetails = async () => {
    let response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    response = await response.json()
    setProduct(response)
  }

  useEffect(() => {
    getProductDetails()
  }, [])

  const { addCart } = useCartStore()

  const handleAddToCart = async () => {
    try {
      await addCart(4, [{ productId: product.id, quantity: 1 }])
      alert('تم إضافة المنتج إلى السلة بنجاح')
    } catch (error) {
      console.error('Failed to add to cart:', error)
    }
  }

  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="bg-white  rounded-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-6 md:mb-0">
            <Image
              src={product?.image}
              width={448}
              height={328}
              alt="Product Image"
            />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <div className="text-yellow-500 flex items-center mb-4">
              <span className="text-xl font-bold">{product?.rating.rate}</span>
              <span className="ml-2 font-sans">تقييم 21671</span>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mb-2 font-sans text-left">
              {' '}
              {product?.title}
            </h1>
            <p className="text-gray-700 mb-4 font-sans text-sm text-left md:text-xl">
              {product?.description}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-xl line-through text-gray-500">8000</span>
              <span className="text-2xl font-bold text-red-600 ml-2 font-sans">
                {product?.price} ر.س
              </span>
              <span className="bg-green-100 text-green-600 p-1 rounded ml-2 font-sans">
                خصم 21%
              </span>
            </div>
            <p className="mb-4 font-sans text-orange-500">{product?.category}</p>

            <div className="flex flex-col">
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white py-2 px-4 rounded mb-2 w-full md:w-auto font-sans"
              >
                إضافة إلى سلة التسوق
              </button>
              <button className="bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded w-full md:w-auto font-sans">
                شراء الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
