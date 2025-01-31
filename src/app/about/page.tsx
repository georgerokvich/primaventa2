'use client'

import Image from 'next/image'
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

const timeline = [
  {
    year: '2010',
    title: 'Osnivanje Kompanije',
    description:
      'Primaventa je osnovana sa vizijom da pruži premium kvalitet morskih plodova restoranima i maloprodaji.',
  },
  {
    year: '2015',
    title: 'Nacionalno Širenje',
    description:
      'Proširili smo poslovanje na nacionalnom nivou, služeći velike gradove širom zemlje.',
  },
  {
    year: '2018',
    title: 'Inicijativa za Održivost',
    description:
      'Pokrenuli smo program održivosti, osiguravajući odgovorne prakse nabavke.',
  },
  {
    year: '2023',
    title: 'Digitalna Transformacija',
    description:
      'Implementirali smo najsavremenija digitalna rešenja za besprekorno naručivanje i isporuku.',
  },
]

const team = [
  {
    name: 'Marko Petrović',
    role: 'Generalni Direktor',
    image: 'https://picsum.photos/id/1025/400/400',
    bio: 'Sa preko 20 godina iskustva u prehrambenoj industriji, Marko vodi našu viziju ka izvrsnosti.',
  },
  {
    name: 'Ana Jovanović',
    role: 'Direktor Operacija',
    image: 'https://picsum.photos/id/1027/400/400',
    bio: 'Ana osigurava besprekorno poslovanje i održava naše visoke standarde kvaliteta.',
  },
  {
    name: 'Nikola Đorđević',
    role: 'Šef Nabavke',
    image: 'https://picsum.photos/id/1074/400/400',
    bio: 'Nikola gradi odnose sa dobavljačima širom sveta kako bi vam doneo najbolje proizvode.',
  },
]

const stats = [
  { label: 'Godine Iskustva', value: '13+' },
  { label: 'Proizvoda', value: '500+' },
  { label: 'Zadovoljnih Klijenata', value: '1000+' },
  { label: 'Gradova', value: '50+' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://picsum.photos/id/425/1920/1080"
          alt="O Primaventi"
          fill
          className="object-cover brightness-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">O Nama</h1>
            <p className="text-xl text-neutral">Isporučujemo Kvalitet od 2010</p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="bg-neutral-light py-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-secondary-dark">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <h2 className="mb-4 text-3xl font-bold text-primary">Naša Misija</h2>
              <p className="text-secondary-dark">
                Pružanje najkvalitetnijih morskih plodova uz održavanje održivih praksi i
                podršku lokalnim zajednicama. Težimo da budemo najpouzdaniji partner našim
                klijentima u ugostiteljskoj industriji.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="mb-4 text-3xl font-bold text-primary">Naša Vizija</h2>
              <p className="text-secondary-dark">
                Postati vodeći distributer održivih morskih plodova, poznat po našoj
                posvećenosti kvalitetu, inovacijama i odgovornosti prema životnoj sredini.
                Cilj nam je postaviti industrijske standarde za izvrsnost i održivost.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline */}
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
            Naš Put
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col md:flex-row md:items-center md:space-x-8"
                variants={fadeInUp}
              >
                <div className="mb-4 md:mb-0 md:w-1/4">
                  <div className="text-2xl font-bold text-accent">{item.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-secondary-dark">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team */}
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
            Naš Tim
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <motion.div 
                key={member.name} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="mb-2 text-accent">{member.role}</p>
                <p className="text-secondary-dark">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
} 