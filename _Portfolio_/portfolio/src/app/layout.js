import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "./UI/navbar/FloatingDockDemo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahil Panwar - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingDockDemo/>
        {/* Add top padding to prevent content from being hidden behind fixed navbar */}
        <main className="pt-24 md:pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}