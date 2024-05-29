'use client'
import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../_stores/userStore';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  title: string;
  quantity: number;
}

function ShoppingCarts() {
  const [productsDetails, setProductsDetails] = useState<Product[] | null>(null);
  const  {token}  = useAuthStore((state) => state.user);


  useEffect(() => {
    async function fetchCartDetails() {
      try {
        const decodedToken = jwtDecode(token);
        const response = await fetch(
          `https://fakestoreapi.com/carts/${decodedToken.sub}`
        );
        const cartData = await response.json();
        const productsDetails = await Promise.all(
          cartData.products.map(async (product: { productId: number; quantity: number }) => {
            const productResponse = await fetch(
              `https://fakestoreapi.com/products/${product.productId}`
            );
            const productData = await productResponse.json();
            return { ...productData, quantity: product.quantity } as Product;
          })
        );
        setProductsDetails(productsDetails);
        console.log(productsDetails);
      } catch (error) {
        console.error('Error fetching cart details:', error);
      }
    }
    fetchCartDetails();
  }, [token]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl font-sans">
              عربة التسوق
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {productsDetails?.map((product) => (
                <li className="flex items-center gap-4" key={product.id}>
                  <Image
                    src={product?.image}
                    width={400}
                    height={200}
                    alt=""
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{product?.title}</h3>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <p className="text-sm">quantity: {product?.quantity}</p>

                    <button className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCarts;
