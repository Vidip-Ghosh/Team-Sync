// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const hackathonsArray = [
  {
    id: 1,
    name: "Witty Hacks",
    imgSrc:
      "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/397/161/datas/original.png",
    status: "registration soon",
    themes: ["AI", "Web3", "Open"],
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Get ready to embark on an epic journey of innovation and creativity at Wittyhacks 4.0, the ultimate 36-hour hackathon experience! Hosted in Indore.",
  },
  {
    id: 2,
    name: "Hack 4 Bengal",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynorHESYhx6FdaBKdrAi58MMGnnqRRel6sIAwXhNVWQ&s",
    status: "140+ participating",
    themes: ["No Restrictions"],
    mode: "Online",
    difficulty: "Easy",
    description:
      "Hack4Bengal empowers all fields to showcase creativity in solving real-life problems for a brighter future. Join us for the reinvigorated Hack4Bengal.",
  },
  {
    id: 3,
    name: "Hack This Fall",
    imgSrc:
      "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/336/697/datas/original.png",
    status: "100+ participating",
    themes: ["WebDev", "Web3"],
    mode: "Offline",
    difficulty: "Medium",
    description:
      "Hack This Fall is one of the most welcoming, inclusive, and thriving hacker communities in India. It was started in 2020 with a mindset.",
  },
  {
    id: 4,
    name: "Hack Hive",
    imgSrc:
      "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/f1a79bba9fec4817af48a38440ecd984/assets/cover/385.jpeg",
    status: "registration soon",
    themes: ["Web3"],
    mode: "Offline",
    difficulty: "Hard",
    description:
      "HackHive, a PAN-India 36-hour multi-domain hackathon. HackHive brings together tech hunters to collaboratively build together and create an impact.",
  },
  {
    id: 5,
    name: "Hack The League",
    imgSrc:
      "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/724/797/datas/original.png",
    status: "14+ participating",
    themes: ["AI", "ML"],
    mode: "Offline",
    difficulty: "Easy",
    description:
      "Hack The League envisions the empowering combination of technology and opportunities to generate practical solutions for real-world problems.",
  },
  {
    id: 6,
    name: "Hack Bytes",
    imgSrc: "https://www.hackbyte.in/hackbyte.png",
    status: "120+ participating",
    themes: ["AI", "Web3"],
    mode: "Online",
    difficulty: "Medium",
    description:
      "HackBytes is a 1.5 day, free, beginner friendly web development international hackathon! It is for participants 13+.",
  },
  {
    id: 7,
    name: "Eth Mumbai",
    imgSrc: "https://ethmumbai.in/post.png",
    status: "registration soon",
    themes: ["AI", "Web3", "Open"],
    mode: "Offline",
    difficulty: "Hard",
    description:
      "After ETHINDIA, ETHMumbai is the first-ever Ethereum hackathon (web 3) in Mumbai that will be happening for 40 hours that is 3 days.",
  },
  {
    id: 8,
    name: "Tech Hacks",
    imgSrc: "https://techacks.org/assets/HackForPunjab.gif",
    status: "100+ participating",
    themes: ["AI", "Web3", "Open"],
    mode: "Offline",
    difficulty: "Hard",
    description:
      "TecHacks, a student-run hackathon community, was founded by the students of Chitkara University, Punjab in 2019.",
  },
];

const HackathonSec = () => {
  const [mode, setMode] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const filterHackathons = (mode) => {
    if (mode === "") {
      setFilteredResults(hackathonsArray);
    } else {
      const filtered = hackathonsArray.filter(
        (hackathon) => mode === hackathon.mode
      );
      console.log(filtered);
      setFilteredResults(filtered);
    }
  };

  useEffect(() => {
    filterHackathons(mode);
  }, [mode]);

  useEffect(() => {
    handleFilter(mode);
  }, []);

  const handleFilter = (mode) => {
    setMode(mode);
  };
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Explore Hackathons
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Browse through a variety of hackathons to choose from, be it any
              tech-stack, location, or other parameters. Just click the
              hackathon you need to take part in and communicate with the
              mentor/organizers of that event directly, cutting through the
              communication barrier.
            </p>
          </div>

          <div className="mb-8 flex ml-10 justify-end items-center">
            <div className="mr-1 w-48px">
              <input
                value={mode}
                type="text"
                className="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Online"
                onChange={(e) => setMode(e.target.value)}
              />
            </div>
            <button
              className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => filterHackathons(mode)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredResults.map((hackathon) => (
              <div key={hackathon.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={hackathon.imgSrc}
                    alt={hackathon.name}
                  />
                  <h3 className="tracking-widest text-green-700 text-xs font-medium title-font">
                    {hackathon.status}
                  </h3>
                  {hackathon.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {theme}
                    </span>
                  ))}
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                    {hackathon.mode}
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    {hackathon.difficulty}
                  </span>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {hackathon.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonSec;
