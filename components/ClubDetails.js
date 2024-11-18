export default function ClubDetails({ club }) {
  return (
    <section
      id="club-details"
      className="bg-white p-6 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold mb-4">{club.name}</h2>
      <p className="text-gray-700">{club.description}</p>
    </section>
  );
}
