'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fish } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);

  const heroImages = [
    {
      src: "https://source.unsplash.com/random/2000x1200/?warehouse",
      alt: "Moderno skladište sa organizovanim policama"
    },
    {
      src: "https://source.unsplash.com/random/2000x1200/?restaurant",
      alt: "Elegantan enterijer restorana"
    },
    {
      src: "https://source.unsplash.com/random/2000x1200/?food",
      alt: "Aranžman svežih namirnica"
    },
    {
      src: "https://source.unsplash.com/random/2000x1200/?chef",
      alt: "Profesionalni kuvar u komercijalnoj kuhinji"
    },
    {
      src: "https://source.unsplash.com/random/2000x1200/?food-factory",
      alt: "Moderno postrojenje za preradu hrane"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src={heroImages[selectedImage].src}
          alt={heroImages[selectedImage].alt}
          fill
          className="object-cover brightness-[0.4] transition-opacity duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        {/* Image Selection Buttons */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                selectedImage === index ? 'bg-[#C5A572]' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Izaberi sliku ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-6 flex items-center justify-center">
              <Fish className="mr-2 h-12 w-12 text-[#C5A572]" />
              <h1 className="text-6xl font-bold tracking-tight">
                <span className="text-[#C5A572]">Prima</span>
                <span className="text-white">venta</span>
              </h1>
            </div>
            <p className="mb-8 text-xl font-light tracking-wide text-[#E5E5E5]">
              Premium Distribucija Hrane za HORECA i Maloprodaju
            </p>
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-[#1B365D] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#C5A572]"
            >
              Pregledajte Naše Proizvode
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* HORECA Supplier Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Zašto Izabrati Primaventu?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Premium Kvalitet',
                description: 'Nabavljeno od proverenih dobavljača širom sveta',
                image: 'https://source.unsplash.com/random/400x300/?quality-food',
              },
              {
                title: 'Brza Dostava',
                description: 'Dostava istog dana za lokalne porudžbine',
                image: 'https://source.unsplash.com/random/400x300/?delivery',
              },
              {
                title: 'Stručna Podrška',
                description: '24/7 korisnička podrška za naše partnere',
                image: 'https://source.unsplash.com/random/400x300/?customer-service',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Naše Kategorije Proizvoda
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Sveža Riba',
                image: 'https://source.unsplash.com/random/400x300/?fresh-fish',
              },
              {
                title: 'Sushi Kvalitet',
                image: 'https://source.unsplash.com/random/400x300/?sushi',
              },
              {
                title: 'Morski Plodovi',
                image: 'https://source.unsplash.com/random/400x300/?seafood',
              },
              {
                title: 'Specijalni Proizvodi',
                image: 'https://source.unsplash.com/random/400x300/?specialty-food',
              },
            ].map((category, index) => (
              <Link
                key={index}
                href="/products"
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105 hover:bg-[#C5A572] hover:text-white"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-center text-lg font-semibold text-gray-900 group-hover:text-white">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#1B365D] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Ostanite u Toku</h2>
            <p className="mb-8">
              Pretplatite se na naš bilten za najnovije proizvode i ponude
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Unesite vašu email adresu"
                className="flex-grow rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
              />
              <button
                type="submit"
                className="rounded-md bg-[#7C9082] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#C5A572]"
              >
                Pretplatite se
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
