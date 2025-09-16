import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import { AnimatePresenceWrapper } from '@/components/AnimatePresenceWrapper'
import WorkInProgressBanner from '@/components/WorkInProgressBanner'
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stephen Haskins CV",
  description: "Online CV for Stephen Haskins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-900`}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Z3VW3L07Q" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Z3VW3L07Q');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <WorkInProgressBanner />
          <AnimatePresenceWrapper>
            {children}
          </AnimatePresenceWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
