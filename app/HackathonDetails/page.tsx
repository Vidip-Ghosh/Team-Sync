import React from "react";
import { Button } from "@/components/ui/button";
const HackathonDetails = () => {
  return (
    <section className="text-gray-600 body-font mb-16">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://wittyhacks4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe9e2409ea9734a56bedc7dc688c8ff3c%2Fassets%2Fcover%2F918.jpeg&w=1440&q=100"
          />
          <div className="m-6 ">
            <span className="flex flex-row bg-purple-100 text-purple-800 text-sm font-medium m-2 p-2 rounded-xl dark:bg-purple-900 dark:text-purple-300">
              No Restrictions
            </span>
          </div>
          <div className="m-6 ">
            <span className="flex flex-row bg-indigo-100 text-indigo-800 text-sm font-medium m-2 p-2 rounded-xl dark:bg-indigo-900 dark:text-indigo-300">
              Online
            </span>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
            WittyHacks
          </h1>
          <p className="mb-8 leading-relaxed dark:text-gray-400">
            Central India's biggest community hackathon. Wittyhacks has been a
            platform where technology leaders and the brightest minds come
            together to collaborate on building tools that solve real problems.
          </p>
          <a href={"/room"} className="flex justify-center">
            <Button className={"dark:bg-white"}>Form a team</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HackathonDetails;
