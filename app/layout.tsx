// Mantine styles
// import '@mantine/core/styles.layer.css'
// import '@mantine/charts/styles.layer.css'
// import '@mantine/code-highlight/styles.layer.css'
// import '@mantine/core/styles.layer.css'
// import '@mantine/dates/styles.layer.css'
// import '@mantine/notifications/styles.layer.css'
// import '@mantine/nprogress/styles.layer.css'
// import '@mantine/spotlight/styles.layer.css'

// imports Tailwind CSS
import './globals.css'

// import {ColorSchemeScript, MantineProvider} from '@mantine/core'

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
      <head>
      </head>
      <body className="bg-background text-foreground">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
