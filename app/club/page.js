"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ClubDetails from "@/components/ClubDetails";
import clubs from "@/data/clubs";

export default function ClubPage() {
  const searchParams = useSearchParams();
  name = searchParams.get("name");

  const club = clubs.find((c) => c.name === name);

  return (
    <div>
      <header className="pt-24">
        <h1 className="text-2xl">{club ? club.name : "Club Details"}</h1>
      </header>
      <main className="p-4">
        {club ? <ClubDetails club={club} /> : <p>Club not found</p>}
      </main>
    </div>
  );
}
