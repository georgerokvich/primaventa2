'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Primaventa</h3>
            <p className="mt-4 text-sm text-[#E5E5E5]">
              Premium distribucija hrane za HORECA i maloprodajne kupce. Kvalitet kojem možete verovati.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Brzi Linkovi</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-[#E5E5E5] hover:text-[#C5A572]">
                  Proizvodi
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#E5E5E5] hover:text-[#C5A572]">
                  O Nama
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#E5E5E5] hover:text-[#C5A572]">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Kontaktirajte Nas</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-[#E5E5E5]">
                Ulica Distribucije 123
              </li>
              <li className="text-sm text-[#E5E5E5]">
                Beograd, Srbija
              </li>
              <li className="text-sm text-[#E5E5E5]">
                Telefon: (011) 123-4567
              </li>
              <li className="text-sm text-[#E5E5E5]">
                Email: info@primaventa.rs
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold">Pratite Nas</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-[#E5E5E5] hover:text-[#C5A572]"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-[#E5E5E5] hover:text-[#C5A572]"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-[#E5E5E5] hover:text-[#C5A572]"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#7C9082] pt-8">
          <p className="text-center text-sm text-[#E5E5E5]">
            © {new Date().getFullYear()} Primaventa. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  )
} 