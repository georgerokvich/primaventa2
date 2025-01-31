'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What are your delivery areas?',
    answer:
      'We currently deliver to all major cities nationwide. Contact us for specific delivery information in your area.',
  },
  {
    question: 'What are your minimum order quantities?',
    answer:
      'Minimum order quantities vary by product type and delivery location. Please contact our sales team for detailed information.',
  },
  {
    question: 'How do I place a bulk order?',
    answer:
      'For bulk orders, please fill out our contact form or call us directly. Our team will assist you with special pricing and delivery arrangements.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'We offer various payment options including credit cards and net terms for qualified business customers.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#D32F2F] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-center text-xl">
            We're here to help with any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <Phone className="mx-auto mb-4 h-8 w-8 text-[#D32F2F]" />
              <h3 className="mb-2 text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <Mail className="mx-auto mb-4 h-8 w-8 text-[#D32F2F]" />
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-gray-600">info@primaventa.com</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <MapPin className="mx-auto mb-4 h-8 w-8 text-[#D32F2F]" />
              <h3 className="mb-2 text-xl font-semibold">Address</h3>
              <p className="text-gray-600">123 Distribution Street</p>
              <p className="text-gray-600">City, State 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D32F2F] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D32F2F] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-gray-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D32F2F] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D32F2F] focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#D32F2F] py-2 text-white transition-colors hover:bg-[#B71C1C]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Our Location</h2>
              <div className="relative h-[400px] w-full rounded-lg bg-gray-200">
                {/* Replace with actual map implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="border-t border-gray-200 p-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 