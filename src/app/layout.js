import { Gabarito } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { getAllSoftwares } from "@/lib/render"
import Footer from '@/components/footer'
import { Analytics } from "@vercel/analytics/next"

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
})

export const metadata = {
  title: "Nyxelkeys",
  description: "Learn Nyxelkeys, kill the mouse 🚀",
}

export default function RootLayout({ children }) {
  const softwares = getAllSoftwares()

  return (
    <html lang="en">
      <Analytics />
      <head>
        <link rel="icon" href="/Nyxelkeys.png" />
        <link rel="apple-touch-icon" href="/Nyxelkeys.png" />
      </head>
      <body className={`${gabarito.variable} ${gabarito.className} antialiased`}>
        <Navbar softwares={softwares} />
        <div className="p-2">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
