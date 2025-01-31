'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search as SearchIcon, Filter, X } from 'lucide-react'

type SearchResult = {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

const sampleResults: SearchResult[] = [
  {
    id: 1,
    name: 'Fresh Atlantic Salmon',
    category: 'Fresh Fish',
    price: 24.99,
    image: 'https://picsum.photos/id/139/400/300',
    description: 'Premium quality Atlantic salmon, perfect for sushi and grilling.',
  },
  {
    id: 2,
    name: 'Jumbo Shrimp',
    category: 'Shellfish',
    price: 29.99,
    image: 'https://picsum.photos/id/140/400/300',
    description: 'Large, succulent shrimp ideal for grilling or seafood dishes.',
  },
  // Add more sample results as needed
]

const popularSearches = [
  'Fresh Fish',
  'Sushi Grade',
  'Shellfish',
  'Specialty Items',
  'Seasonal Specials',
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [results, setResults] = useState<SearchResult[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filters = {
    categories: ['Fresh Fish', 'Shellfish', 'Sushi Grade', 'Specialty Items'],
    price: ['Under $25', '$25-$50', '$50-$100', 'Over $100'],
    availability: ['In Stock', 'Pre-order'],
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate search results
    setResults(sampleResults)
  }

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="sticky top-16 z-10 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="relative">
            <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-[#D32F2F] focus:outline-none"
            />
          </form>

          {/* Popular Searches */}
          <div className="mt-2 flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Filters */}
          <div className="mb-6 md:mb-0 md:w-64">
            <div className="sticky top-40">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  className="md:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Filter className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className={`mt-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
                {Object.entries(filters).map(([category, options]) => (
                  <div key={category} className="mb-6">
                    <h3 className="mb-2 font-medium text-gray-900">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="space-y-2">
                      {options.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes(option)}
                            onChange={() => toggleFilter(option)}
                            className="rounded border-gray-300 text-[#D32F2F] focus:ring-[#D32F2F]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div className="relative mb-4 h-48">
                      <Image
                        src={result.image}
                        alt={result.name}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      {result.name}
                    </h3>
                    <p className="mb-2 text-sm text-gray-500">{result.category}</p>
                    <p className="mb-4 text-sm text-gray-600">{result.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#D32F2F]">
                        ${result.price.toFixed(2)}
                      </span>
                      <button className="rounded-md bg-[#D32F2F] px-4 py-2 text-sm text-white transition-colors hover:bg-[#B71C1C]">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="text-center text-gray-600">
                No results found for "{searchQuery}"
              </div>
            ) : (
              <div className="text-center text-gray-600">
                Start typing to search for products
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 