import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header/Header";
import { quicksand } from "./fonts/fonts";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutoz",
  description:
    "Sitio web sobre Agustin Fizzano: Analista de sistemas y desarrollador web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${quicksand.className} antialiased`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      />
    </html>
  );
}
