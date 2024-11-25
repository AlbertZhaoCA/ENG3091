export default function ClubDetails({ club }) {
  return (
    <section
    id="club-details"
    className="bg-white min-h-screen p-8 md:p-16 border border-gray-300 rounded-lg shadow-md max-w-4xl mx-auto"
  >
    <div className="flex flex-col h-full items-center justify-center">
      <img
        className="w-48 h-48 object-cover rounded-full shadow-lg m-8"
        src={club.logo}
        alt={`${club.name} logo`}
      />
      <h2 className="text-4xl font-bold mb-4 text-center">{club.name}</h2>
      <p className="text-gray-700 max-w-3xl text-center">{club.description}</p>
    </div>
  </section>
  );
}
