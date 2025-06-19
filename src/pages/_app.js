import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
<>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
   <link rel="icon" href="/images/favicon/favicon.ico" sizes="32x32" />
  <link rel="icon" href="/images/favicon/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
  <link rel="manifest" href="/images/favicon/site.webmanifest" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <AnimatePresence mode="wait">
      <Component key={router.asPath} {...pageProps} />
        
      </AnimatePresence>
        <Footer/>
    </main>
</>
  )
}
