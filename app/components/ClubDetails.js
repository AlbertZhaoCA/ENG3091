export default function ClubDetails({ club }) {
  return (
    <section id="club-details" className="bg-white p-4 border border-gray-300 shadow-md">
      <h2 className="text-2xl font-bold">{club.name}</h2>
      <p className="text-gray-700">{club.description}</p>
    </section>
  );
}