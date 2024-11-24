"use client";

import { useRef, useEffect, useState } from "react";

export default function GetInvolved() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
      console.log("Section height:", sectionRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="z-0">
        <div className="flex flex-col justify-center pt-[84px] h-screen relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url(https://www.wku.edu.cn/sites/main.prod.dpmgr.wku.edu.cn/files/styles/crop_freeform/public/2024-04/ligongxueyuandalou_0.jpg?itok=nv9X836g)",
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
            <h1 className="text-8xl font-extrabold tracking-tight">
              Get Involved
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-2xl text-gray-200">
              Join one of our many student clubs and organizations to enhance
              your university experience. Whether you're interested in sports,
              culture, academics, or advocacy, there's a club for you!
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="/join"
                className="px-6 py-3 bg-white text-blue-600 font-medium text-lg rounded-md shadow hover:bg-gray-100"
              >
                Join Now
              </a>
              <a
                href="#learn-more"
                className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          id="learn-more"
          className="relative bg-white py-16 sm:py-24 lg:py-32"
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                How to Get Involved
              </h2>
              <ul className="mt-8 list-disc list-inside text-gray-700 text-left mx-auto max-w-3xl space-y-4">
                <li>
                  Attend club fairs and events to learn more about different
                  clubs.
                </li>
                <li>
                  Visit the club's website or social media pages for more
                  information.
                </li>
                <li>
                  Contact club leaders to express your interest and ask any
                  questions.
                </li>
                <li>
                  Participate in club meetings and activities to get a feel for
                  the club's culture.
                </li>
                <li>Sign up and become an active member!</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Benefits of Joining a Club
              </h2>
              <ul className="mt-8 list-disc list-inside text-gray-700 text-left mx-auto max-w-3xl space-y-4">
                <li>
                  Meet new people and make friends with similar interests.
                </li>
                <li>Develop leadership and teamwork skills.</li>
                <li>Enhance your resume with extracurricular activities.</li>
                <li>Participate in fun and engaging events.</li>
                <li>Make a positive impact on the university community.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}