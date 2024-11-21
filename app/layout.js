import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WKU CLUBS",
  description:
    "WKU Clubs is a platform for students to explore and join clubs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/puma.png" />
      </head>
      <body className="bg-gray-100">
        <Header />
        <div className="flex-grow  z-0">
          <div className=" mx-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
