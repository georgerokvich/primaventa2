'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Menu, User, LogOut, Fish } from 'lucide-react'
import { createBrowserClient } from '@supabase/ssr'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Fish className="mr-2 h-6 w-6 text-[#C5A572]" />
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-[#C5A572]">Prima</span>
                <span className="text-[#1B365D]">venta</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/" className="text-gray-900 hover:text-[#C5A572]">
              Početna
            </Link>
            <Link href="/products" className="text-gray-900 hover:text-[#C5A572]">
              Proizvodi
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-[#C5A572]">
              O Nama
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-[#C5A572]">
              Kontakt
            </Link>
          </nav>

          {/* Search, Auth, and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="rounded-full p-2 text-gray-900 hover:text-[#C5A572]"
              aria-label="Pretraga"
            >
              <Search className="h-6 w-6" />
            </button>

            {user ? (
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center space-x-2 rounded-full p-2 text-gray-900 hover:text-[#C5A572]"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <User className="h-6 w-6" />
                  <span className="hidden md:block max-w-[150px] truncate">
                    {user.email}
                  </span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:text-[#C5A572]"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Odjava
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="rounded-md bg-[#1B365D] px-4 py-2 text-sm font-medium text-white hover:bg-[#C5A572]"
              >
                Prijava
              </Link>
            )}

            <button
              type="button"
              className="md:hidden rounded-md p-2 text-gray-900 hover:text-[#C5A572]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Meni"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-[#C5A572]"
              >
                Početna
              </Link>
              <Link
                href="/products"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-[#C5A572]"
              >
                Proizvodi
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-[#C5A572]"
              >
                O Nama
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-[#C5A572]"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 