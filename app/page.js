import { clubs } from "@/data/clubs";
import CategoryAnimation from "@/components/Category";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallex";

export default function HomePage() {
  const shuffledClubs = clubs.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroParallax products={shuffledClubs} />
     

      <CategoryAnimation />
      
      <div className="minh-screen pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Wenzhou-Kean University clubs gather communities around sports,
            culture, academics, advocacy and more.
          </h1>
          <div className="mt-24  grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {shuffledClubs.map((club, index) => (
              <div key={`${club.name}-${index}`}>
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={club.logo}
                    alt={club.name}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {club.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {club.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="minh-screen pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Latest Event
          </h2>
          <div className="mt-8 news-container event flex flex-col space-y-4">
            <Link className="text-blue-500 hover:underline" href="/events/psy_1">
            PsyClub | Worries Grocery Store            </Link>
            <Link className="text-blue-500 hover:underline" href="/events/psy_2">
            PsyClub | Mandala Art Therapy            </Link>
            <Link className="text-blue-500 hover:underline" href="/events/psy_3">
            PsyClub | Free Hug
            </Link>
            <Link className="text-blue-500 hover:underline" href="/events/psy_4">
            PsyClub | Autumn Collage Poetry Activity Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
