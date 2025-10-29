import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PHI ArtHaus | Transform Arts Education in Georgia',
  description: 'A nonprofit fine arts homeschool academy launching August 2027. Remote instruction with monthly in-person experiences connecting Georgia students with galleries, artists, and Art Basel.',
  keywords: 'arts education, homeschool, Georgia, fine arts academy, Art Basel, nonprofit',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    title: 'PHI ArtHaus | Support the Next Generation of Artists',
    description: 'Cultivating the Artists of Tomorrow - A Georgia Fine Arts Academy launching August 2027',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
