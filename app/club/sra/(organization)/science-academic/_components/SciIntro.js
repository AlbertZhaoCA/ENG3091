import LeaderIntro from "./LeaderIntro";

export default function SciIntro() {
  return (
    <div className="pt-24 bg-black text-white ">
      <section className="min-h-screen bg-animated cyber-grid py-20 relative">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-12 neon-text glitch-effect"
            data-text="理科学术部"
          >
            Science Academic of WKU-SRA
          </h2>

          <LeaderIntro />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="feature-card rounded-lg p-6 floating">
    <div className="text-5xl mb-4 text-cyan-400 feature-icon">
      <i className="fa-solid fa-plane"></i>
    </div>
    <h3 className="text-2xl font-bold mb-2">
      🦅 Are you interested in research and eager to soar high?
    </h3>
    <p className="text-gray-300">
      Welcome!  
      In the Science Academic Department, you can communicate with professors about any projects you're interested in and start your research journey. You'll also find like-minded peers to collaborate on projects. Enrich your resume with research experiences and prepare thoroughly for further studies abroad!
    </p>
  </div>

  <div
    className="feature-card rounded-lg p-6 floating"
    style={{ animationDelay: "2s" }}
  >
    <div className="text-5xl mb-4 text-pink-500 feature-icon">
      <i className="fa-solid fa-book"></i>
    </div>
    <h3 className="text-2xl font-bold mb-2">
      🎓 Do you have no research experience but still have a strong interest in it?
    </h3>
    <p className="text-gray-300">
      Just come here and join us!  
      In the Science Academic Department, many senior members with strong research skills are happy to guide you. They’ll teach you practical research essentials, including how to use GitHub, efficiently replicate models, leverage AI tools like Claude to read papers effectively, and format documents using LaTeX. Build your research capabilities quickly in no time!
    </p>
  </div>

  <div
    className="feature-card rounded-lg p-6 floating"
    style={{ animationDelay: "2s" }}
  >
    <div className="text-5xl mb-4 text-purple-500 feature-icon">
      <i className="fa-solid fa-list"></i>
    </div>
    <h3 className="text-2xl font-bold mb-2">
      🔭 Does the long journey of research feel daunting, and you're unsure how to plan your four years?
    </h3>
    <p className="text-gray-300">
      Don’t panic!  
      Senior members of the Science Academic Department will share their past learning experiences with you. They’ll teach you how to plan your courses wisely, balance GPA and research projects, take clear course notes using Markdown, and gradually find and dive into fields you enjoy. They'll also encourage you to participate in events like SRD to showcase your research ideas and achievements in grand settings. From zero to one, you can do it!
    </p>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
