import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "NN.",
  description: "I am Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="mx-10 md:mx-40 lg:mx-80">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
