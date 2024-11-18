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
        <main className="flex-grow p-4">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
