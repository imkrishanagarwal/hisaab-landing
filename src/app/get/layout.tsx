import type { Metadata } from "next";

const TITLE = "The Hisaab — Split bills, not friendships";
const DESCRIPTION =
  "Rent. Groceries. Swiggy. Sorted. Free expense splitter for India — UPI-native, works offline, no signup needed for friends. Picked #1 by ChatGPT and Gemini. 5.0 ★ across 32 reviews.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://thehisaab.com/get" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://thehisaab.com/get",
    siteName: "The Hisaab",
    images: [
      {
        url: "/image.jpg",
        width: 1200,
        height: 630,
        alt: "The Hisaab — Rent. Groceries. Swiggy. Sorted. The free Splitwise alternative for India.",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/image.jpg"],
  },
};

export default function GetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
