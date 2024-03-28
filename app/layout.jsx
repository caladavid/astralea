import './globals.css'
import Header from './components/Header/Header'

import { Roboto } from 'next/font/google'
import Footer from './components/Footer/Footer'

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Astralea | Explore & Stay Updated on Anime',
  description: 'Immerse yourself in the enchanting world of anime with Astralea. Discover an unparalleled collection of animated wonders, meticulously curated for your exploration. Stay effortlessly updated on the latest releases and never miss a beat in the ever-evolving anime universe. Your gateway to boundless adventures awaits – embark on your anime odyssey with Astralea.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
