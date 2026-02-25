import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download The Hisaab - Split bills, not friendships",
  description:
    "Rent. Groceries. Swiggy. Sorted. Download The Hisaab — the free expense tracker made for Indian flatmates. Split bills easily with friends.",
  openGraph: {
    type: "website",
    title: "Download The Hisaab - Split bills, not friendships",
    description:
      "Rent. Groceries. Swiggy. Sorted. Download The Hisaab — the free expense tracker made for Indian flatmates.",
    url: "https://thehisaab.com/get",
    siteName: "The Hisaab",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "The Hisaab - Rent. Groceries. Swiggy. Sorted. Made for Indian flatmates.",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download The Hisaab - Split bills, not friendships",
    description:
      "Rent. Groceries. Swiggy. Sorted. Download the free expense tracker made for Indian flatmates.",
    images: ["/image.png"],
  },
};

export default function GetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
