import type { Metadata } from "next";
import "./globals.css";

//updated layout.tsx with metadata for project

export const metadata: Metadata = {
  title: 'MA Lottery Scratcher EV Calculator',
  description: 'Calculate expected value for MA Lottery Scratcher games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-green-800">{children}</body>
    </html>
  )
}