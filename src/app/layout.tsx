import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evertwine - Connect Through Real Experiences",
  description:
    "A social networking app that connects people through meetups and happy hour events. Build meaningful relationships through real-world experiences.",
  keywords:
    "social networking, meetups, happy hour, events, connections, community",
  authors: [{ name: "Evertwine Team" }],
  openGraph: {
    title: "Evertwine - Connect Through Real Experiences",
    description:
      "A social networking app that connects people through meetups and happy hour events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
