import type { Metadata } from 'next'

import { ReactQueryProvider } from '@/providers/ReactQuery'

import { cn } from '@/lib/utils'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
/* import { Footer } from '@/Footer/Component' */
import { MyFooter } from '@/components/myui/footer'
import { Header } from '@/components/myui/nav-payload'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="zh-Hans"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.jpg" rel="icon" sizes="64x64" />
      </head>
      <body>
        <Providers>
          <ReactQueryProvider>
            <div className="m-auto max-w-8xl items-center justify-between lg:px-8">
              {/* <AdminBar adminBarProps={{ preview: isEnabled }} /> */}
              <Header />
              {children}
              <MyFooter />
            </div>
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
