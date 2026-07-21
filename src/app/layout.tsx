import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astronomia Luxe | Time, laid bare",
  description: "A perpetual calendar with nothing to hide. 407 components. Zero shortcuts.",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-[#060606] text-[#EDE8E0] font-sans selection:bg-[#C9A05C]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
