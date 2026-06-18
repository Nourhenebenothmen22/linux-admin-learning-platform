import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Master Linux from beginner commands to real system administration. Interactive lessons, quizzes, and practice exercises.",
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.svg`, type: "image/svg+xml" },
    ],
    apple: [
      { url: `${BASE_PATH}/favicon.svg`, sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: `${BASE_PATH}/favicon.svg`,
  },
  manifest: `${BASE_PATH}/site.webmanifest`,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/linux-admin-learning-platform/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/linux-admin-learning-platform/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/linux-admin-learning-platform/favicon.svg" />
        <link rel="manifest" href="/linux-admin-learning-platform/site.webmanifest" />
        <meta name="theme-color" content="#22c55e" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Linux Academy" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed] font-sans">
        {children}
      </body>
    </html>
  );
}
