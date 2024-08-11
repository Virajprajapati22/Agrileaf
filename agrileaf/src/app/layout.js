import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import bgimage from '../../src/images/leafs-b1.jpg'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AgriLeaf",
  description: "AgriLeaf App",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body 
        className={inter.className + "min-h-screen bg-fixed bg-cover bg-center"}
        style={{
          backgroundImage: `url(${bgimage.src})`,
        }}
        >
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  );
}
