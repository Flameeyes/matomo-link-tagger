// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import type { Metadata } from 'next'
import Image from 'next/image'

import 'bulma/bulma.sass'

export const metadata: Metadata = {
  title: 'Socials Link Tagger',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang='en'>
        <body>
          {children}

          <footer className="footer has-text-centered">
            <div className="container">
              <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop">
                  <p style={{ marginTop: '1rem' }}>
                    <a href="https://bulma.io">
                      <Image src="/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  )
}
