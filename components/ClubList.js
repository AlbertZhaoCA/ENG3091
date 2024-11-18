import Link from "next/link";

export default function ClubList({ clubs }) {
  return (
    <section
      id="clubs-list"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
    >
      {clubs.map((club) => (
        <div
          key={club.name}
          className="club-item bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={club.logo}
            alt={club.name}
            className="h-32 w-32 object-cover mx-auto mb-4 rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2">{club.name}</h2>
          <p className="text-gray-700 mb-4">{club.description}</p>
          <Link
            className="text-blue-500 hover:underline"
            href={`club?name=${club.name}`}
          >
            View Details
          </Link>
        </div>
      ))}
    </section>
  );
}
