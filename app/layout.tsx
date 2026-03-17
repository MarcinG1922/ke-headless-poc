import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaczmarek Electric • Sieć hurtowni elektrotechnicznych',
  description: 'Sieć hurtowni elektrotechnicznych i elektromarketów w całej Polsce. Przystąp do programu dla partnerów Z Nami Warto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
