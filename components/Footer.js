import { FaBilibili } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow-md shadow-blue-200 bg-blue-600 text-white pt-4 w-full opacity-95">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <a href="http://wku.edu.cn">
                <img
                  src="https://www.wku.edu.cn/sites/main.prod.dpmgr.wku.edu.cn/files/2023-05/wku_brand-2018_2.png"
                  alt="WKU LOGO"
                  width="64"
                  height="64"
                  className="w-[200px]"
                />
              </a>

              <p className="text-gray-200 hover:text-gray-200">
                WKU Clubs is a platform for students to explore and join clubs
                and organizations at Wenzhou-Kean University.
              </p>

              <div className="flex justify-center space-x-4">
                <Link
                  href="https://www.facebook.com/wenzhoukean/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <FaFacebookSquare className="text-[48px] hover:text-red-400" />
                </Link>
                <Link
                  href="https://space.bilibili.com/303059613"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <FaBilibili className="text-[48px] hover:text-red-400" />
                </Link>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-md font-semibold leading-6 text-white">
                  Wenzhou-Kean University Student Organizations
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/clubs"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Student Clubs
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://wku.edu.cn"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Wenzhou-Kean University
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div>
                <h3 className="text-md font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/events"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/用户协议.pdf"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy.pdf"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/attributions"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Attribution And References
                    </a>
                  </li>
                </ul>
                </div>
               
              </div>
              <div>
                <h3 className="text-md font-semibold leading-6 text-white">
                  Contact Us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-md leading-6 text-gray-300">
                    88 Daxue Road, Ouhai District, Wenzhou, Zhejiang, China
                  </li>
                  <li className="text-md leading-6 text-gray-300">
                    Postal Code: 325060
                  </li>
                  <li className="text-md leading-6 text-gray-300">
                    +86 577 5587 0000
                  </li>
                  <li className="text-md leading-6 text-gray-300">
                    <a
                      href="mailto:wkuclubs@wku.edu.cn"
                      className="hover:text-gray-50"
                    >
                      wkuclubs@wku.edu.cn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024 Wenzhou-Kean University
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
