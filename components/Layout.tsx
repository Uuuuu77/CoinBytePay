import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>CoinByte - Future of Digital Payments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" defer></script>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <img src="/CoinByte.png" alt="CoinByte Logo" className="h-10" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['home', 'about', 'services', 'ecosystem', 'roadmap', 'team', 'contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="hover:text-gray-300">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; 2024 CoinByte. All Rights Reserved.</p>
          <div className="social-icons flex space-x-4 mt-2">
            <a href="https://x.com/JohnM_77" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">X</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
            <a href="#" className="hover:text-gray-300">GitHub</a>
          </div>
          <div className="twitter-feed mt-4">
            <a className="twitter-timeline" href="https://twitter.com/JohnM_77?ref_src=twsrc%5Etfw">Tweets by CoinByte</a>
          </div>
        </div>
      </footer>
    </>
  )
}

