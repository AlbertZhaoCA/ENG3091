import Modal from "@/components/picture-pop-up";

export default function Intro() {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-10 mb-10">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
      📨 Communication and Interaction
      </h2>
      <p className="mb-12 text-lg text-gray-500">
      Welcome to join the Public Relations Department of the Science and Technology Research Association and start your journey of communication and interaction!
      </p>

      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  💬 Improve Communication Skills
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                Want to excel in the field of event public relations? The Public Relations Department will be your best choice! We provide rich practical opportunities, from writing event copy to communicating with invitees, from event planning to crisis management, allowing your communication and coordination skills to be fully enhanced in practice.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    🤝 Build Collaboration
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                Here, you will not only improve your skills in effective public relations and communication, but also collaborate with your classmates to plan events, promote activities, and grow together!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  🌟 Showcase Your Talents
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                The PR department provides a stage for you to showcase your talents. Whether it's a campus publicity competition or a technological innovation event, we will offer full support to help your talents and creativity shine.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  📣 Publicity and Communication
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                In the PR department, we are not just spreading information; we are messengers of technology and innovation. Through diverse publicity channels and innovative communication strategies, we will share research achievements and event news with a broader audience, bringing more people into our technological world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
