import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kip Studios, Photo Studio and Event Space in Bucktown, Chicago",
  description:
    "Premiere studio rental in Bucktown, Chicago. Available for by-the-hour rentals for photo and video shoots, events, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
