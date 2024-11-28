import {Boxes} from "@/components/ui/background-box";
import { HoverEffect } from "@/components/ui/card-hover";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/ui/hero-hilght";

export default function SRA() {
  return <OrganizationStructure/>
}

export function OrganizationStructure() {
    return (
      <div className="pt-24 min-h-screen z-0 relative w-full overflow-hidden bg-slate-800 flex flex-col items-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
  
        <Boxes />
  
        <h1 className={cn(" text-6xl font-bold text-center m-4 text-white relative z-20")}>
          Wenzhou-Kean University Science Research Association
        </h1>
  
        <p
          className={cn(
            "md:text-2xl max-w-5xl text-justify text-2xl mt-4 mb-24 text-white relative z-20"
          )}
        >
          We are a student organization dedicated to fostering scientific innovation and academic development. Our mission is to provide a platform where members can explore, collaborate, and grow their skills in science and technology. 
          <Highlight delay={0} duration={0.5}>
            We strive to advance research capabilities and scientific literacy.
          </Highlight>{" "}
          Through various initiatives, we aim to empower every "wisdom keeper" to pursue academic excellence and contribute to groundbreaking research.
        </p>
        <h1 className={cn("font-bold text-4xl mb-4 text-white relative z-20")}>
          Organizational Structure
        </h1>
  
        <p
          className={cn(
            "md:text-2xl max-w-5xl text-justify text-2xl mb-24 text-white relative z-20"
          )}
        >
          The association is composed of a dynamic team working toward
          <Highlight delay={0.5} duration={0.5}>
            promoting scientific research and academic exploration.
          </Highlight>{" "}
          Our structure includes the 
          <Highlight delay={1} duration={1}>
            Presidium, Administrative Department, and Academic Department.
          </Highlight>{" "}
          The Presidium sets strategic goals and oversees implementation. The Administrative Department
          <Highlight delay={2} duration={0.5}>
            manages event planning and operational tasks,
          </Highlight>{" "}
          while the Academic Department organizes academic events, research projects, and collaborations.
        </p>
  
        <h1 className={cn("text-4xl font-bold m-4 text-white relative z-20")}>
          Meet Our Teams
        </h1>
        <Organization />
      </div>
    );
  }

export const projects = [
  {
    title: "Science Academic Department",
    description:
      "Dedicated to fostering scientific research and organizing academic activities to encourage collaboration and innovation among members.",
    link: "club/sra/science-academic",
  },
  {
    title: "Business Academic Department",
    description: "🚀 Join the Business Academic Department and dive into the world of data and analytics!",
    link: "club/sra/business-academic",
  },
  {
    title: "Publicity Department",
    description: "📣 Creative designs and compelling storytelling to bring our association to life.",
    link: "club/sra/publicity",
  },
  {
    title: "Secretary Department",
    description:
      "👩🏻‍💼 Become a backbone of our organization by managing critical documents, establishing rules, and ensuring operational efficiency.",
    link: "club/sra/secretary",
  },
  {
    title: "Public Relations Department",
    description: "📞 Build connections and enhance communication within and outside the association.",
    link: "club/sra/public-relations",
  },
  {
    title: "Planning Department",
    description: "Organizes activities to serve students and enrich campus culture.",
    link: "club/sra/planning",
  }
];



export function Organization() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

