import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Orbitron, Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Launching Soon",
  description:
    "Stay tuned! Our website is launching soon. Leave your email to get notified when we go live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
