"use client";
import { useSearchParams } from "next/navigation";
import ClubDetails from "@/components/ClubDetails";
import clubs from "@/data/clubs";
import { Suspense } from "react";
import Plugin from "@/components/ContentPlugin";
import SRA from "./sra";

export function Club() {
  const searchParams = useSearchParams();
  let name = searchParams.get("name");

  const club = clubs.find((c) => c.name === name);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!club.link && (
        <div>
          <main className="p-4">
            {club ? <ClubDetails club={club} /> : <p>Club not found</p>}
          </main>
        </div>
      )}
      {name === "Wenzhou-Kean University Science and Research Association" && (
        <SRA />
      )}
      {club.link &&
        name !== "Wenzhou-Kean University Science and Research Association" && (
          <Plugin className="pt-20" path={club.link} />
        )}
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
