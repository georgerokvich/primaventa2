'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Filter, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === 'All' || product.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary">Our Products</h1>
          <p className="mt-2 text-secondary-dark">
            Discover our premium selection of seafood products
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters */}
          <motion.div 
            className="lg:w-64"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-primary">Filters</h2>
                <Filter className="h-5 w-5 text-secondary" />
              </div>

              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full rounded-md px-4 py-2 text-left transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'text-secondary-dark hover:bg-neutral'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div 
            className="flex-1"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 text-lg font-semibold text-primary">
                        {product.name}
                      </h3>
                      <p className="mb-2 text-sm text-secondary-dark">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-semibold">
                          ${product.price.toFixed(2)}
                        </span>
                        <motion.button 
                          className="rounded-md bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Add to Cart
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 