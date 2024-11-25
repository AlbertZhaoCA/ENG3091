"use client";
import { useSearchParams } from "next/navigation";
import ClubDetails from "@/components/ClubDetails";
import clubs from "@/data/clubs";
import { Suspense } from "react";

export function Club() {
  const searchParams = useSearchParams();
  name = searchParams.get("name");

  const club = clubs.find((c) => c.name === name);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>

        <main className="p-4">
          {club ? <ClubDetails club={club} /> : <p>Club not found</p>}
        </main>
      </div>
    </Suspense>
  );
}

export default function ClubPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Club />
    </Suspense>
  );
}
