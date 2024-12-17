import { clubs } from "@/data/clubs";
import CategoryAnimation from "@/components/Category";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallex";
import ClubCardStack from "@/components/CardStack";

export default function HomePage() {
  const shuffledClubs = clubs.slice(0, 5);

  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="flex p-6 h-screen">
      <div className="w-full max-w-7xl space-y-4 my-auto mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-6xl xl:inline">
            Welcome to {" "}  
          </span>
          <span className="block text-8xl text-indigo-600 xl:inline">
          WKU Clubs        
          </span>
        </h1>
        <p className="text-blue-400">We are student clubs association of Wenzhou-Kean University</p>
        <div className="sm:flex sm:justify-center lg:justify-start">
          <div className="mt-12 rounded-md shadow">
            <a
              href="http://wku.edu.cn"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
            >
              Visit WKU
            </a>
          </div>
        </div>
      </div>
    </div>
      <HeroParallax products={shuffledClubs} />

      <CategoryAnimation />

      <div className="min-h-screen py-8 mb-8">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-7xl mb-8 font-extrabold tracking-tight text-gray-900">
            Wenzhou-Kean University Clubs
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg  sm:mx-auto lg:mx-0 lg:text-xl">
          Wenzhou-Kean University clubs gather communities around sports,
          culture, academics, advocacy and more. Have a detiled look at our clubs. 
          </p>
          <div className="grid grid-cols-2 place-items-center gap-24">
          <ClubCardStack />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Latest Event
          </h2>
          <div className="mt-8 news-container event flex flex-col space-y-4">
            <Link
              className="text-blue-500 hover:underline"
              href="/events/10"
            >
              PsyClub | Worries Grocery Store{" "}
            </Link>
            <Link
              className="text-blue-500 hover:underline"
              href="/events/3"
            >
              WKU-SRA | Ice Break{" "}
            </Link>
            <Link
              className="text-blue-500 hover:underline"
              href="/events/11"
            >
              ArtTroupe | Loong's Workshop
            </Link>
            <Link
              className="text-blue-500 hover:underline"
              href="/events/7"
            >
              PsyClub | Autumn Collage Poetry Activity Review
            </Link>
          </div>
        </div>
          </div>
     
        </div>
      </div>
    </div>
  );
}
