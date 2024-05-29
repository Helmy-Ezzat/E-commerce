import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useAuthStore } from './app/_stores/userStore'

export async function middleware(request: NextRequest) {
  const isAuthenticated = !!request.cookies.get('authToken')

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // إذا كان المستخدم مسجل الدخول، يمكنك تركيب الطلب ليتابع العملية
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/products',
    '/products/:path*',
    '/shoppingCarts',
    '/shoppingCarts/:path*',
    '/categories',
    '/categories/:path*',
  ],
}
