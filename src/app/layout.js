import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahadev studios",
  description: "Mahadev studios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="w-full">
          <Navbar />
          <div className="overflow-hidden w-full bg-[url('/dark22.jpg')]">
            {children}
          </div>
          <Footer />

        </div>
      </body>
    </html>
  );
}
