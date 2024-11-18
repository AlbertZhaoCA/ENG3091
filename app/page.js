import ClubList from '@/components/ClubList';

export default function HomePage() {
  const clubs = [
    { name: 'Club 1', description: 'This is the description for Club 1', link: '/club/Club 1' },
    { name: 'Club 2', description: 'This is the description for Club 2', link: '/club/Club 2' },
    { name: 'Club 3', description: 'This is the description for Club 3', link: '/club/Club 3' },
    // Add more clubs as needed
  ];

  return <ClubList clubs={clubs} />;
}