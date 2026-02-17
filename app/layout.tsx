import './globals.css'
import 'highlight.js/styles/github-dark.css'
import Navbar from './components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jiggy Blog",
  description: 'Created by JiggyTheGreat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-800 text-white min-h-screen">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}