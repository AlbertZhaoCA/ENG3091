import Link from 'next/link';

export default function ClubList({ clubs }) {
  return (
    <section id="clubs-list" className="flex flex-wrap gap-4">
      {clubs.map(club => (
        <div key={club.name} className="club-item bg-white border border-gray-300 p-4 shadow-md w-full md:w-1/3 text-center">
          <h2 className="text-xl font-bold">{club.name}</h2>
          <p className="text-gray-700">{club.description}</p>
          <Link href={club.link}>
            <a className="text-blue-500 hover:underline">View Details</a>
          </Link>
        </div>
      ))}
    </section>
  );
}