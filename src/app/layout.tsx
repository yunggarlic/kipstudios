import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Barlow({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kip Studios",
  description: "Photography and event space in Chicago, IL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen px-4 desktop:px-10 flex flex-col gap-10 desktop:gap-20`}>
        <Navbar />
        <main className="flex flex-col items-center justify-between gap-10 desktop:gap-20 mt-36 desktop:mt-48">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
