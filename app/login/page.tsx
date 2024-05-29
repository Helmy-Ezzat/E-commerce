'use client'
import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../_stores/userStore'
import { useRouter } from 'next/navigation'
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login } = useAuthStore()
  const router = useRouter()
  const user = useAuthStore((state) => state.user)
  console.log(user)

 useEffect(() => {
   if (user) {
     router.replace('/')
   }
 }, [user, router])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await login(username, password)
      if (user) {
        router.replace('/')
      }
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  return (
    <section>
      <h1 className="text-center text-2xl font-sans py-5">تسجيل الدخول</h1>
      <form
        onSubmit={handleLogin}
        className="h-1/2 flex items-center justify-center"
      >
        <div className="flex flex-col gap-4 w-[30rem] mx-auto">
          <input
            name="username"
            type="text"
            className="border border-gray-200 rounded-md py-2 px-4 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            placeholder="إسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="password"
            className="border border-gray-200 rounded-md py-2 px-4 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-sans"
          >
            دخول
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
