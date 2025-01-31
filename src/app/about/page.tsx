import Image from 'next/image'

const timeline = [
  {
    year: '2010',
    title: 'Company Founded',
    description:
      'Primaventa was established with a vision to provide premium quality seafood to restaurants and retailers.',
  },
  {
    year: '2015',
    title: 'National Expansion',
    description:
      'Expanded operations nationwide, serving major cities across the country.',
  },
  {
    year: '2018',
    title: 'Sustainability Initiative',
    description:
      'Launched our sustainability program, ensuring responsible sourcing practices.',
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description:
      'Implemented state-of-the-art digital solutions for seamless ordering and delivery.',
  },
]

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/id/1025/400/400',
    bio: 'With over 20 years in the food industry, John leads our vision for excellence.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    image: 'https://picsum.photos/id/1027/400/400',
    bio: 'Sarah ensures smooth operations and maintains our high quality standards.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Sourcing',
    image: 'https://picsum.photos/id/1074/400/400',
    bio: 'Michael builds relationships with suppliers worldwide to bring you the best products.',
  },
]

const stats = [
  { label: 'Years of Experience', value: '13+' },
  { label: 'Products', value: '500+' },
  { label: 'Satisfied Clients', value: '1000+' },
  { label: 'Cities Served', value: '50+' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://picsum.photos/id/425/1920/1080"
          alt="About Primaventa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">About Us</h1>
            <p className="text-xl">Delivering Quality Since 2010</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                To provide the highest quality seafood products while maintaining sustainable
                practices and supporting local communities. We strive to be the most trusted
                partner for our customers in the food service industry.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading sustainable seafood distributor, known for our
                commitment to quality, innovation, and environmental responsibility. We aim
                to set industry standards for excellence and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex flex-col md:flex-row md:items-center md:space-x-8"
              >
                <div className="mb-4 md:mb-0 md:w-1/4">
                  <div className="text-2xl font-bold text-[#D32F2F]">{item.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Leadership Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-2 text-[#D32F2F]">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#D32F2F] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 