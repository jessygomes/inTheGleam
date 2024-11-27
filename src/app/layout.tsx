import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="52721484-2e96-43ea-a3c3-386377071862"
        ></script>
      </head>
      <body className={inter.className}>
        <Analytics />
        <div className="fixed top-0 z-50 w-full flex justify-center">
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
