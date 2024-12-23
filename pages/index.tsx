import { useEffect } from 'react'
import Layout from '../components/Layout'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

export default function Home() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    })

    return () => {
      swiper.destroy()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Layout>
      <section id="home" className="hero bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Empowering Global Payments with CoinByte</h1>
          <p className="text-xl mb-8">Fast, secure, and low-cost crypto payments and remittances across borders.</p>
          <button onClick={() => scrollToSection('services')} className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Explore Services
          </button>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About CoinByte</h2>
          <p className="text-xl">CoinByte revolutionizes digital payments by leveraging blockchain and stablecoins to enable seamless global transactions.</p>
        </div>
      </section>

      <section id="services" className="services-slider py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {[
                { title: 'Cross-Border Payments', description: 'Send money globally with low fees and instant settlements.' },
                { title: 'Merchant Integration', description: 'Enable businesses to accept crypto payments easily.' },
                { title: 'Stablecoin Solutions', description: 'Utilize CBUSD for stable and secure transactions.' }
              ].map((service, index) => (
                <div key={index} className="swiper-slide bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">CoinByte Ecosystem</h2>
          <p className="text-xl">Discover the growing ecosystem that connects users, businesses, and developers on CoinByte's platform.</p>
        </div>
      </section>

      <section id="roadmap" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
          <p className="text-xl">Explore our milestones and future plans as we continue to innovate and expand the CoinByte ecosystem.</p>
        </div>
      </section>

      <section id="team" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-xl">Get to know the passionate individuals driving CoinByte's success and innovation.</p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form action="#" method="post" className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <textarea name="message" placeholder="Your Message" required className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

