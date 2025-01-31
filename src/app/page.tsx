'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fish } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);

  const heroImages = [
    {
      src: "https://picsum.photos/id/292/2000/1200",
      alt: "Moderno skladište sa organizovanim policama"
    },
    {
      src: "https://picsum.photos/id/225/2000/1200",
      alt: "Elegantan enterijer restorana"
    },
    {
      src: "https://picsum.photos/id/431/2000/1200",
      alt: "Aranžman svežih namirnica"
    },
    {
      src: "https://picsum.photos/id/425/2000/1200",
      alt: "Profesionalni kuvar u komercijalnoj kuhinji"
    },
    {
      src: "https://picsum.photos/id/365/2000/1200",
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
          className="object-cover brightness-[0.4] transition-all duration-700"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
        
        {/* Image Selection Buttons */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                selectedImage === index ? 'bg-accent scale-110' : 'bg-white/50 hover:bg-white'
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label={`Izaberi sliku ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="mb-6 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Fish className="mr-2 h-12 w-12 text-accent" />
              <h1 className="text-6xl font-bold tracking-tight">
                <span className="text-accent">Prima</span>
                <span className="text-white">venta</span>
              </h1>
            </motion.div>
            <motion.p 
              className="mb-8 text-xl font-light tracking-wide text-neutral"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Premium Distribucija Hrane za HORECA i Maloprodaju
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent hover:shadow-lg"
              >
                Pregledajte Naše Proizvode
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HORECA Supplier Cards */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold text-primary"
            variants={fadeInUp}
          >
            Zašto Izabrati Primaventu?
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Premium Kvalitet',
                description: 'Nabavljeno od proverenih dobavljača širom sveta',
                image: 'https://picsum.photos/id/493/400/300',
              },
              {
                title: 'Brza Dostava',
                description: 'Dostava istog dana za lokalne porudžbine',
                image: 'https://picsum.photos/id/1027/400/300',
              },
              {
                title: 'Stručna Podrška',
                description: '24/7 korisnička podrška za naše partnere',
                image: 'https://picsum.photos/id/1025/400/300',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="text-secondary-dark">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Product Categories */}
      <motion.section 
        className="bg-neutral-light py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold text-primary"
            variants={fadeInUp}
          >
            Naše Kategorije Proizvoda
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Sveža Riba',
                image: 'https://picsum.photos/id/139/400/300',
              },
              {
                title: 'Sushi Kvalitet',
                image: 'https://picsum.photos/id/292/400/300',
              },
              {
                title: 'Morski Plodovi',
                image: 'https://picsum.photos/id/429/400/300',
              },
              {
                title: 'Specijalni Proizvodi',
                image: 'https://picsum.photos/id/365/400/300',
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:bg-accent hover:text-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-center text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-white">
                      {category.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="bg-primary py-16 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="mb-4 text-3xl font-bold"
              variants={fadeInUp}
            >
              Ostanite u Toku
            </motion.h2>
            <motion.p 
              className="mb-8 text-neutral"
              variants={fadeInUp}
            >
              Pretplatite se na naš bilten za najnovije proizvode i ponude
            </motion.p>
            <motion.form 
              className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <input
                type="email"
                placeholder="Unesite vašu email adresu"
                className="flex-grow rounded-md px-4 py-2 text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              />
              <motion.button
                type="submit"
                className="rounded-md bg-secondary px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-accent hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pretplatite se
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
