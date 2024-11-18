import { useRouter } from 'next/router';
import ClubDetails from '@/components/ClubDetails';

export default function ClubPage() {
  const router = useRouter();
  const { name } = router.query;

  const clubs = [
    { name: 'Club 1', description: 'This is the description for Club 1' },
    { name: 'Club 2', description: 'This is the description for Club 2' },
    { name: 'Club 3', description: 'This is the description for Club 3' },
    // Add more clubs as needed
  ];

  const club = clubs.find(c => c.name === name);

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl">{club ? club.name : 'Club Details'}</h1>
      </header>
      <main className="p-4">
        {club ? <ClubDetails club={club} /> : <p>Club not found</p>}
      </main>
    </div>
  );
}