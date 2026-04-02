import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Page";
import Footer from "@/components/Footer/Page";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopNexus",
  description: "E-commerce App designed by Rufnul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
