import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeSync } from "@/components/theme-sync"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ismail Karankin - Physical AI / Robotics / VLA / VLM / Aerospace",
  description:
    "Founder of Oli Robotics. Aerospace engineer with hands-on experience across robotics software and hardware. Built an autonomous drone delivery startup, a fully automated robot barista, and large-scale data processing systems. Focused on scaling real-world robotics through end-to-end systems — data-driven and VLA-native.",
  generator: "v0.app",
  keywords: ["Physical AI", "Robotics", "VLA", "VLM", "Aerospace", "Oli Robotics", "Ismail Karankin", "Robot Barista", "Drone Delivery", "AI"],
  authors: [{ name: "Ismail Karankin" }],
  openGraph: {
    title: "Ismail Karankin - Physical AI / Robotics / VLA / VLM / Aerospace",
    description: "Founder of Oli Robotics. Aerospace engineer building autonomous drones, robot baristas, and scalable robotics systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Karankin - Physical AI / Robotics / VLA / VLM / Aerospace",
    description: "Founder of Oli Robotics. Aerospace engineer building autonomous drones, robot baristas, and scalable robotics systems.",
    creator: "@stsqit",
  },
  icons: {
    icon: "/icon.svg",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeSync />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
