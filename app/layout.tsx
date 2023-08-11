import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Providers} from "./providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'EpicLiem',
    description: "Liem Luttrell's Personal Website",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='dark'>
          <Providers>
            <body className={inter.className}>
              {children}
            </body>
          </Providers>
        </html>
    )
}
