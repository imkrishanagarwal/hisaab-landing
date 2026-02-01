import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thehisaab.com'),
  title: "Hisaab - Split bills, not friendships | Free expense tracker",
  description: "Simple, beautiful expense tracker for India. Split bills with friends, track shared expenses, settle debts easily. 100% free forever. Made in India for India.",
  keywords: ["expense tracker", "bill splitting", "split expenses", "shared expenses", "money tracker", "group expenses", "india", "free app", "expense sharing"],
  authors: [{ name: "Hisaab Team" }],
  creator: "Hisaab",
  publisher: "Hisaab",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Hisaab - Split bills, not friendships",
    description: "Simple, beautiful expense tracker for India. Split bills with friends, track shared expenses, settle debts easily. 100% free forever.",
    url: "https://thehisaab.com",
    siteName: "Hisaab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hisaab - Split bills, not friendships",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisaab - Split bills, not friendships",
    description: "Simple, beautiful expense tracker for India. 100% free forever. Made in India for India.",
    images: ["/twitter-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
