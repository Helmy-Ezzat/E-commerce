'use client'
import React, { useEffect, useState } from 'react'
import {
  FacebookIcon,
  FastCartIcon,
  HeartIcon,
  InstagramIcon,
  PhoneCallIcon,
  PinterestIcon,
  SearchIcon,
  ShoppingCartSimpleIcon,
  TwitterIcon,
  UserIcon,
  YoutubeIcon,
} from './Icons/Icons'
import Link from 'next/link'
import { useAuthStore } from '../_stores/userStore'
import { useCartStore } from '../_stores/cartStore'

// Define the Header component
const Header: React.FC = () => {
  const isUser = useAuthStore((state) => state.user)
  const cartCount = useCartStore((state) => state.getCartCount())
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <header
      className={`bg-cerulean fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Top */}
      <div className="hidden md:flex md:justify-between md:items-center py-3 px-6 sm:px-10 lg:px-20 xl:px-40">
        <div className="flex gap-2">
          <PhoneCallIcon />
          <span className="text-white">+1-23456789012</span>
        </div>

        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <p className="text-white font-public font-sans">اللغة العربية</p>
          <InstagramIcon />
          <YoutubeIcon />
          <PinterestIcon />
          <FacebookIcon />
          <TwitterIcon />

          <span className="text-white hidden md:inline">: Follow us</span>
        </div>
      </div>
      {isUser && (
        <>
          {/* Middle */}
          <div className="hidden md:block py-5 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 border border-slate-400">
            <div className="flex flex-col h-16 items-center justify-between md:flex-row">
              <Link href={'/'} className="flex items-center gap-2">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-purple">
                  TechnoStore
                </p>
                <FastCartIcon />
              </Link>
              <div className="relative flex-1 ml-3 md:ml-0 -mt-3">
                <div className=" md:w-[75%] mx-auto">
                  <input
                    type="text"
                    id="Search"
                    placeholder="بحث"
                    className="w-full rounded-sm pr-10 border-gray-200 py-2.5 shadow-sm sm:text-sm"
                  />
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <SearchIcon />
                  </button>
                </span>
              </div>
              <div className="flex gap-3 md:gap-6">
                <UserIcon />
                <HeartIcon />
                <Link href={'/shoppingCarts'} className="relative">
                  <ShoppingCartSimpleIcon />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs rounded-full text-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="bg-white flex h-20  justify-center  shadow-md">
            <ul className="  w-[519px] flex items-center justify-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 font-public transition hover:text-gray-500/75 font-sans"
                  href={'/'}
                >
                  {' '}
                  الرئيسة{' '}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 font-sans"
                  href={'/products'}
                >
                  {' '}
                  المنتجات{' '}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 font-public transition hover:text-gray-500/75 font-sans"
                  href={'/categories'}
                >
                  {' '}
                  الأقسام{' '}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 font-sans"
                  href={'/products'}
                >
                  {' '}
                  المنتجات{' '}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 font-sans"
                  href={'/products'}
                >
                  {' '}
                  المنتجات{' '}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
