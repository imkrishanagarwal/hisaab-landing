import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MixpanelProvider from "@/components/MixpanelProvider";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, softwareApplicationSchema } from "@/lib/schema";

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
  title: {
    default: "Hisaab - Free Splitwise Alternative | Split Bills & Track Expenses in India",
    template: "%s | Hisaab",
  },
  description: "The best free Splitwise alternative made for India. Split bills with friends, track shared expenses, settle debts. Works offline, no ads, free forever. Download on Android & iOS.",
  keywords: ["splitwise alternative", "splitwise alternative free", "expense tracker", "bill splitting app", "split expenses", "shared expenses", "expense splitter", "group expenses india", "free expense tracker", "hisaab", "roommate expense tracker", "trip expense splitter", "bill splitting", "money tracker", "group expenses", "india", "free app", "expense sharing"],
  authors: [{ name: "Hisaab Team" }],
  creator: "Hisaab",
  publisher: "Hisaab",
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thehisaab.com',
  },
  facebook: {
    appId: "799277515879208",
  },
  openGraph: {
    type: "website",
    title: "Hisaab - Split bills, not friendships",
    description: "Your friends owe you money. Now they know it too. Track shared expenses, split bills, settle debts. 100% free forever.",
    url: "https://thehisaab.com",
    siteName: "Hisaab",
    images: [
      {
        url: "/image.jpg",
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
    description: "Track shared expenses, split bills, settle debts. 100% free forever. Made in India.",
    images: ["/image.jpg"],
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareApplicationSchema} />
        <MixpanelProvider />
        {children}
      </body>
    </html>
  );
}
