// Mantine styles
import '@mantine/core/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/code-highlight/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/spotlight/styles.css'

// imports Tailwind CSS
import './globals.css'

import {ColorSchemeScript, MantineProvider} from '@mantine/core'

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
        <ColorSchemeScript />
      </head>
      <body className="bg-background text-foreground">
        <MantineProvider>
          <main className="min-h-screen">{children}</main>
        </MantineProvider>
      </body>
    </html>
  )
}
