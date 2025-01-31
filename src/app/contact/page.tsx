'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

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

const faqs = [
  {
    question: 'Koji je minimalni iznos porudžbine?',
    answer: 'Minimalni iznos porudžbine je 10.000 RSD za dostavu u Beogradu, i 20.000 RSD za dostavu van Beograda.',
  },
  {
    question: 'Koliko vremena je potrebno za dostavu?',
    answer: 'Dostavljamo istog dana za porudžbine u Beogradu primljene do 14h. Za ostale lokacije, vreme dostave je 24-48h.',
  },
  {
    question: 'Da li imate posebne uslove za restorane?',
    answer: 'Da, nudimo posebne pogodnosti za HORECA partnere, uključujući prilagođene cene i prioritetnu dostavu.',
  },
  {
    question: 'Kako mogu da postanem vaš partner?',
    answer: 'Kontaktirajte nas putem forme ispod ili nas pozovite. Naš tim će vam predstaviti sve mogućnosti saradnje.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-primary py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Kontaktirajte Nas
            </motion.h1>
            <motion.p 
              className="mt-4 text-neutral"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Tu smo da odgovorimo na sva vaša pitanja
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-primary">Informacije za Kontakt</h2>
                <p className="mt-4 text-secondary-dark">
                  Izaberite način koji vam najviše odgovara da stupite u kontakt sa nama.
                </p>
              </motion.div>

              <motion.div 
                className="rounded-lg bg-neutral-light p-6"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">Telefon</h3>
                    <p className="mt-1 text-secondary-dark">+381 11 123 4567</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="rounded-lg bg-neutral-light p-6"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">Email</h3>
                    <p className="mt-1 text-secondary-dark">info@primaventa.rs</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="rounded-lg bg-neutral-light p-6"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">Adresa</h3>
                    <p className="mt-1 text-secondary-dark">
                      Bulevar Mihajla Pupina 10a
                      <br />
                      11070 Novi Beograd
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="rounded-lg bg-white p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-primary">Pošaljite Nam Poruku</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-dark">
                    Ime i Prezime
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-neutral px-4 py-2 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-dark">
                    Email Adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-neutral px-4 py-2 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-dark">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-neutral px-4 py-2 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pošalji Poruku
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section 
        className="bg-neutral-light py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="mb-8 text-center text-3xl font-bold text-primary"
            variants={fadeInUp}
          >
            Često Postavljana Pitanja
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg border border-neutral"
                variants={fadeInUp}
              >
                <motion.button
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-neutral-light"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ backgroundColor: 'rgba(229, 229, 229, 0.5)' }}
                >
                  <span className="text-lg font-medium text-primary">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-secondary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-secondary" />
                  )}
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {openFaq === index && (
                    <div className="border-t border-neutral bg-white p-4">
                      <p className="text-secondary-dark">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
} 