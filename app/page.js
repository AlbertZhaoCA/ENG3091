import { clubs } from "@/data/clubs";
import CategoryAnimation from "@/components/Category";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallex";
import ClubCardStack from "@/components/CardStack";

export default function HomePage() {
  const shuffledClubs = clubs.slice(0, 5);

  return (
    <div className="bg-gray-100 min-h-screen">
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
