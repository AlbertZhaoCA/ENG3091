import Image from "next/image";

export default function AboutUsIntro() {
  return (
    <section className="h-3/4 pt-24 my-auto w-3/4 mx-auto overflow-hidden grid grid-cols-2  place-items-center">
      <div className="flex h-full flex-col justify-between">
        <h2 className="text-5xl font-bold leading-tight text-black dark:text-white ">
          Wenzhou-Kean
          <span className="text-blue-400"> Student Club Community</span>
        </h2>
        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
          Wenzhou-Kean University clubs associate students with similar
          interests, hobbies, and goals. We provide a platform for students to
          explore and join clubs and organizations at Wenzhou-Kean University.
          Strat here, go anywhere.
        </p>

        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
          Comes from all walks of life, students in clubs can learn, grow, and
          develop leadership skills. We are committed to providing a safe and
          inclusive environment for all students to explore their interests and
          passions.
        </p>

        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8 space-y-2">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
            <span className="relative"> Have a question? </span>
          </span>
          <br className="block" />
          Send email to{" "}
          <a
            type="email"
            href="mailto:clubs@wku.edu.cn"
            title=""
            className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
          >
            WKU Clubs
          </a>
        </p>
      </div>
      <Image
        width={500}
        height={285}
        className="h-full w-auto"
        src="https://www.wku.edu.cn/sites/main.prod.dpmgr.wku.edu.cn/files/2023-05/pic.png"
        alt=""
      />
    </section>
  );
}
