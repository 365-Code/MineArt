import type { Metadata } from 'next'
import { Fira_Code, Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReactProvider from '@/redux/provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// const inter = Inter({ subsets: ['latin'] })
// const firaCode = Fira_Code({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300']} )

export const metadata: Metadata = {
  title: 'MineArt',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={poppins.className}>
        <ReactProvider>
        <Header/>
        <main id='main' key={"main"} className='h-full flex-1 pt-[5.2rem]'>
          {children}
        </main>
        <Footer/>
        </ReactProvider>
        <ToastContainer 
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      </body>
    </html>
  )
}