import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kip Studios, Bucktown Photo Studio & Event Space",
  description:
    "Premiere studio rental in Bucktown, Chicago. By-the-hour rentals available for photo and video shoots, events, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-FC20952VWK" />
      <body
        className={`${inter.className} relative min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="overflow-hidden relative flex flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
