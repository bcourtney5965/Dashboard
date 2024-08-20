// imports Tailwind CSS
import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Dashboard',
  description: 'For tracking income, passive income, net worth, and tax rates',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
