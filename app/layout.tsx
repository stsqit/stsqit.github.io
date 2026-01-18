import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { ThemeSync } from "@/components/theme-sync"
import "./globals.css"

const colfax = localFont({
  src: [
    {
      path: "../public/fonts/Colfax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Colfax-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Colfax-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-colfax",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Ismail Karankin - Robotics Engineer & Founder",
  description:
    "Founder of Oli Robotics. Aerospace engineer building autonomous drones, robot baristas, and scalable robotics systems.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${colfax.variable} font-sans antialiased`}>
        <ThemeSync />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
