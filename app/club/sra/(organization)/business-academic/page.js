"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarImg from "./_datas/avatar.jpg";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { Boxes } from "@/components/ui/background-box";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen pt-24 z-0 relative w-full overflow-hidden bg-slate-800 flex flex-col items-center  ">
      <Boxes />
      <h1 className="mt-4 text-4xl font-bold text-white z-50"> Business Academic of WKU-SRA </h1>
      <div className="grid grid-rows-[1fr_auto] gap-4 place-items-center w-full mx-auto px-10 py-12">
        <div >
          <BackgroundGradient className="rounded-[22pxbg-white dark:bg-zinc-900">
            <CardHeader className="flex items-center space-x-4 p-5 border-b">
              <Avatar>
                <AvatarImage
                  src={avatarImg.src}
                  alt="Ethan"
                  className="w-24 h-24 rounded-full"
                />
                <AvatarFallback>马文轩</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-lg"></span>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-xl font-bold">
                马文轩（Ethan） Class 26 Applied Math
              </CardTitle>
              <CardDescription>
                <p className="mt-2">Research Project：</p>
                <ul className="list-disc pl-5">
                  <li>Marketing prediction using NLP</li>
                  <li>Use Machine learning to predict invistigation market</li>
                </ul>
              </CardDescription>
            </CardContent>
            <CardFooter className="p-5 border-t">
              <a
                href="https://blog.csdn.net/weixin_74241638?spm=1000.2115.3001.5343"
                target="CSDN"
                rel="noopener noreferrer"
              >
                <Image
                  width={48}
                  height={30}
                  alt="csdn"
                  src="/CSDN_Logo.svg.png"
                ></Image>
              </a>
            </CardFooter>
          </BackgroundGradient>
        </div>
        <div className="flex items-center justify-center max-w-3xl">
  <TextRevealCard
    revealText="Starts Here"
    text="Future of Business Innovation"
  >
    <TextRevealCardTitle>
      Join the Business Academic Department and Embark on Your Data Journey!
    </TextRevealCardTitle>
    <TextRevealCardDescription className="flex flex-col space-y-8">
      <p>
        📊 Quantitative Learning, Let Data Speak for You!
        In the Business Academic Department, we don’t just study numbers; we master them! We provide cutting-edge quantitative analysis tools and data visualization techniques, enhancing your business insights and giving you a competitive edge for the future workplace.
      </p>

      <p>
        🔍 Enhance Skills, Empower Your Dreams!
        Want to make a mark in the business world? This is the place for you! Not only do we teach you how to analyze data, but we also show you how to use that data to strategize effectively, helping you excel in the field of business.
      </p>

      <p>
        👥 Find Study Partners and Grow Together!
        Here, you’ll gain more than knowledge—you’ll find like-minded peers. Brainstorm together, participate in business competitions, build models, and succeed as a team!
      </p>

      <p>
        🏆 Compete and Showcase Your Talent!
        The Business Academic Department is a stage for you to shine. Whether it’s in-campus business competitions or international modeling contests, we provide all the support you need to have your talents recognized.
      </p>

      <p>
        🌟 Join Us and Make the Future Yours!
        Don’t let your potential remain untapped. Join the Business Academic Department, and let’s turn dreams into reality, making the future within reach!
      </p>
    </TextRevealCardDescription>
  </TextRevealCard>
</div>

      </div>
    </main>
  );
}
