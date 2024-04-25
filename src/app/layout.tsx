import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "inTheGleam",
  description: "Freelancers : Développement Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="fixed top-0 z-50 w-full flex justify-center">
          <Navbar />
        </div>
        {children}
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
