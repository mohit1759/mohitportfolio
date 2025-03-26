import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MohitSoni.dev - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
  openGraph: {
    title: "MohitSoni.dev - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills",
    url: "https://MohitSonidev.vercel.app",
    siteName: "MohitSoni.dev",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mohit Soni Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MohitSoni.dev - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills",
    images: ["/logo.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="MohitSoni.dev - Full Stack Developer" />
        <meta property="og:description" content="Full stack developer portfolio showcasing projects and skills" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://MohitSonidev.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MohitSoni.dev - Full Stack Developer" />
        <meta name="twitter:description" content="Full stack developer portfolio showcasing projects and skills" />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}




import './globals.css'