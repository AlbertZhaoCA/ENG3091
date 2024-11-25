"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`z-50 shadow-md shadow-blue-200 bg-blue-600 text-white p-4 fixed top-0 w-full opacity-95 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              width={200}
              height={200}
              src="https://www.wku.edu.cn/sites/main.prod.dpmgr.wku.edu.cn/files/2023-08/WKU_Brand-2018-White.png"
              alt="Wenzhou-Kean University Logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/clubs">Clubs</Link>
            </li>
            <li>
              <Link href="/get-involved">Get Involved</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
