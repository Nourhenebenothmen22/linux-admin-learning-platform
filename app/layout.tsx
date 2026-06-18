import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ErrorBoundary from "../components/ErrorBoundary";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
  adjustFontFallback: true,
});

const BASE_PATH = "/linux-admin-learning-platform";

export const metadata: Metadata = {
  metadataBase: new URL("https://nourhenebenothmen22.github.io/linux-admin-learning-platform"),
  title: {
    default: "Linux System Admin Academy",
    template: "%s | Linux System Admin Academy",
  },
  description:
    "Master Linux from beginner commands to real system administration. Interactive lessons, hands-on practice, and quizzes designed to take you from zero to system administrator.",
  keywords: ["Linux", "system administration", "terminal", "bash", "shell scripting", "sysadmin", "Linux tutorial"],
  manifest: `${BASE_PATH}/site.webmanifest`,
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/Linux-Logo.jpg`,
        type: "image/jpeg",
        sizes: "any",
      },
    ],
    apple: {
      url: `${BASE_PATH}/Linux-Logo.jpg`,
      type: "image/jpeg",
      sizes: "180x180",
    },
    shortcut: `${BASE_PATH}/Linux-Logo.jpg`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nourhenebenothmen22.github.io/linux-admin-learning-platform",
    siteName: "Linux System Admin Academy",
    title: "Linux System Admin Academy",
    description: "Master Linux from beginner commands to real system administration.",
    images: [
      {
        url: `${BASE_PATH}/Linux-Logo.jpg`,
        width: 800,
        height: 800,
        alt: "Linux System Admin Academy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Linux System Admin Academy",
    description: "Master Linux from beginner to system administrator.",
    images: [`${BASE_PATH}/Linux-Logo.jpg`],
  },
  other: {
    "theme-color": "#22c55e",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Linux Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/jpeg" href="/linux-admin-learning-platform/Linux-Logo.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/linux-admin-learning-platform/Linux-Logo.jpg" />
        <link rel="shortcut icon" href="/linux-admin-learning-platform/Linux-Logo.jpg" type="image/jpeg" />
        <meta name="theme-color" content="#22c55e" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <style>{`
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid}
          html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif}
          body{margin:0;line-height:inherit;background-color:#0a0a0a;color:#ededed}
          h1,h2,h3{font-size:inherit;font-weight:inherit;margin:0}
          a{color:inherit;text-decoration:inherit}
          button{cursor:pointer;background-color:transparent;border:0;padding:0}
          .min-h-screen{min-height:100vh}
          .flex{display:flex}
          .flex-col{flex-direction:column}
          .items-center{align-items:center}
          .justify-center{justify-content:center}
          .text-white{color:#ffffff}
          .bg-zinc-950{background-color:#09090b}
          .font-sans{font-family:ui-sans-serif,system-ui,sans-serif}
        `}</style>
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Linux Academy" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed] font-sans">
        <Navbar />
        <ErrorBoundary>
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
