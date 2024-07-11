import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Loading from "./loading";

// const inter = Inter({ subsets: ['latin'] })
// const firaCode = Fira_Code({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: {
    default: "Luxury Marble Handicrafts & Sculptures | MineArt",
    template: "%s | MineArt"
  },
  description:
    "Discover exquisite marble handicrafts, elegant sculptures, and custom marble products at MineArt. Embrace luxury and sophistication with our handcrafted marble items designed to elevate any space.",
  keywords:
    "marble handicrafts, marble sculptures, custom marble products, luxury marble items, elegant marble art, handcrafted marble, MineArt, marble decor, marble art pieces, high-end marble designs.",
  openGraph: {
    title: "MineArt - Luxury Marble Handicrafts & Custom Products",
    description: "Explore MineArt for exquisite marble handicrafts, items, and custom products. Discover luxury and elegance in every piece of handcrafted marble art.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MineArt - Luxury Marble Handicrafts & Custom Products",
    description: "Explore MineArt for exquisite marble handicrafts, items, and custom products. Discover luxury and elegance in every piece of handcrafted marble art.",
    

  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReactProvider>
          <Header />
          <Suspense fallback={<Loading />}>
            <main id="main" key={"main"} className="h-full flex-1 pt-[5.2rem]">
              {children}
            </main>
          </Suspense>
          <Footer />
        </ReactProvider>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
