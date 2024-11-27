import ClubList from "@/components/ClubList";
import { clubs } from "@/data/clubs";

export default function page() {
  return (
    <div className="pt-24">
      <ClubList clubs={clubs} />
    </div>
  );
}
