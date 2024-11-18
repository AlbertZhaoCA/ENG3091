import { clubs } from "@/data/clubs";

export default function HomePage() {
  const shuffledClubs = clubs.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex p-6 h-screen">
        <div className="w-full max-w-7xl space-y-8 my-auto mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-8xl xl:inline">
              More than {clubs.length} student clubs{" "}
            </span>
            <span className="block text-5xl text-indigo-600 xl:inline">
              and organizations
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg  sm:mx-auto lg:mx-0 lg:text-xl">
            Provide an opportunity for every student to become involved. Start
            here go anywhere.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
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

      <div></div>

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
    </div>
  );
}
