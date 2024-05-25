import React from "react";
const HackathonDetails = () => {
  return (
    <section className="text-gray-600 body-font bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://wittyhacks4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe9e2409ea9734a56bedc7dc688c8ff3c%2Fassets%2Fcover%2F918.jpeg&w=1440&q=100"
          />
          <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 p-2 rounded-xl dark:bg-purple-900 dark:text-purple-300">
            Theme: No Restrictions
          </span>
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 rounded-xl dark:bg-indigo-900 dark:text-indigo-300">
            Mode: Online
          </span>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            WittyHacks
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            Central India's biggest community hackathon. Wittyhacks has been a
            platform where technology leaders and the brightest minds come
            together to collaborate on building tools that solve real problems.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Form a team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonDetails;
