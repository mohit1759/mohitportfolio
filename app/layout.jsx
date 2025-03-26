import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RohitSharma.dev - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
  openGraph: {
    title: "RohitSharma.dev - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills",
    url: "https://rohitsharmadev.vercel.app",
    siteName: "RohitSharma.dev",
    images: [
      {
        url: "/logo.png", // Your OG image
        width: 1200,
        height: 630,
        alt: "Rohit Sharma Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RohitSharma.dev - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills",
    images: ["/logo.png"], // Your OG image
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="RohitSharma.dev - Full Stack Developer" />
        <meta property="og:description" content="Full stack developer portfolio showcasing projects and skills" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://rohitsharmadev.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RohitSharma.dev - Full Stack Developer" />
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