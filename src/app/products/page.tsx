'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Filter, ChevronDown } from 'lucide-react'

type Product = {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Atlantic Salmon',
    category: 'Fresh Fish',
    price: 24.99,
    image: 'https://picsum.photos/id/139/800/600',
    description: 'Premium quality Atlantic salmon, perfect for sushi and grilling.',
  },
  {
    id: 2,
    name: 'Jumbo Shrimp',
    category: 'Shellfish',
    price: 29.99,
    image: 'https://picsum.photos/id/429/800/600',
    description: 'Large, succulent shrimp ideal for grilling or seafood dishes.',
  },
  {
    id: 3,
    name: 'Bluefin Tuna',
    category: 'Sushi Grade',
    price: 39.99,
    image: 'https://picsum.photos/id/292/800/600',
    description: 'Sushi-grade bluefin tuna, perfect for sashimi and sushi rolls.',
  },
  {
    id: 4,
    name: 'King Crab Legs',
    category: 'Specialty Items',
    price: 49.99,
    image: 'https://picsum.photos/id/365/800/600',
    description: 'Premium Alaskan king crab legs, pre-cooked and ready to serve.',
  },
  // Add more products as needed
]

const categories = ['All', 'Fresh Fish', 'Shellfish', 'Sushi Grade', 'Specialty Items']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64">
            <div className="sticky top-24">
              <div className="flex items-center justify-between md:justify-start mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  className="md:hidden flex items-center text-gray-600"
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                >
                  <Filter className="h-5 w-5 mr-1" />
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        selectedCategory === category
                          ? 'bg-[#D32F2F] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#D32F2F] font-semibold">
                        ${product.price.toFixed(2)}
                      </span>
                      <button className="bg-[#D32F2F] text-white px-4 py-2 rounded-md hover:bg-[#B71C1C] transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 