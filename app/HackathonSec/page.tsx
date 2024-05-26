import Image from "next/image";

const HackathonSec = () => {
  return (
    <div className="">
      {/* <div className="space-x-1">
    <a className="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span className="mr-1 text-gray-300">#</span>Policy</a>
    <a className="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span className="mr-1 text-gray-300">#</span>Science</a>
    <a className="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span className="mr-1 text-gray-300">#</span>Technology</a>
    <a className="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span className="mr-1 text-gray-300">#</span>Health</a>
    <a className="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span className="mr-1 text-gray-300">#</span>Research</a>
</div> */}

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
              Browser through a variety of hackathons to choose from, be at any
              tech-stack , location, and other parameters. Just click the
              hackathon you need to take part in and communicate with the
              mentor/organizers of that event directly cutting through the
              communication barrier.
            </p>
          </div>

          {/* search / filter */}
          <div className="mb-8 flex ml-10 justify-end items-center">
            <div className="mr-1 w-48px">
              <input
                type="text"
                className="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Search for articles"
              />
            </div>
            <button className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
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
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/397/161/datas/original.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-700 text-xs font-medium title-font">
                  registration soon
                </h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  AI . Web3 . Open
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Offline
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  Hard
                </span>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Witty Hacks
                </h2>
                <p className="leading-relaxed text-base">
                  Get ready to embark on an epic journey of innovation and
                  creativity at Wittyhacks 4.0, the ultimate 36-hour hackathon
                  experience! Hosted in Indore.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynorHESYhx6FdaBKdrAi58MMGnnqRRel6sIAwXhNVWQ&s"
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  140+ participating
                </h3>

                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  no restrictions
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Online
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  easy
                </span>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Hack 4 Bengal
                </h2>
                <p className="leading-relaxed text-base">
                  Hack4Bengal empowers all fields to showcase creativity in
                  solving real-life problems for a brighter future. Join us for
                  the reinvigorated Hack4Bengal.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/336/697/datas/original.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  100+ participating
                </h3>

                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  web dev . web3
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Offline
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">
                  medium
                </span>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Hack This Fall
                </h2>
                <p className="leading-relaxed text-base">
                  ​Hack This Fall is one of the most welcoming, inclusive, and
                  thriving hacker communities in India. It was started in 2020
                  with a mindset.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/f1a79bba9fec4817af48a38440ecd984/assets/cover/385.jpeg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-700 text-xs font-medium title-font">
                  registration soon
                </h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Web3
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Offline
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  hard
                </span>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Hack Hive
                </h2>
                <p className="leading-relaxed text-base">
                  HackHive, a PAN-India 36-hour multi-domain hackathon. HackHive
                  brings together tech hunters to collaboratively build together
                  and create an impact.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/724/797/datas/original.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  14+ participating
                </h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  AI . ML
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Offline
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  easy
                </span>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Hack The League
                </h2>
                <p className="leading-relaxed text-base">
                  Hack The League envisions the empowering combination of
                  technology and opportunities to generate practical solutions
                  for real-world problems.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://www.hackbyte.in/hackbyte.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  120+ participating
                </h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  AI . Web3
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  online
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">
                  medium
                </span>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Hack Bytes
                </h2>
                <p className="leading-relaxed text-base">
                  HackBytes is a 1.5 day, free, beginner friendly web
                  development international hackathon! It is for participants
                  13+.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://ethmumbai.in/post.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-xs font-medium title-font">
                  registration soon
                </h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  AI . Web3 . Open
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Offline
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  Hard
                </span>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Eth Mumbai
                </h2>
                <p className="leading-relaxed text-base">
                  After ETHINDIA, ETHMumbai is the first-ever Ethereum hackathon
                  (web 3) in Mumbai that will be happening for 40 hours that is
                  3 days .
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://techacks.org/assets/HackForPunjab.gif"
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  100+ participating
                </h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  AI . Web3 . Open
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Offline
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  Hard
                </span>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Tech Hacks
                </h2>
                <p className="leading-relaxed text-base">
                  TecHacks, a student-run hackathon community, was founded by
                  the students of Chitkara University, Punjab in 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonSec;
