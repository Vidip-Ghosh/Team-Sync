const MoreHackathons = () => {
  return (
    <section className="body-font">
      <h1 className="text-center text-4xl text-white font-bold">
        More Hackathons
      </h1>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block absolute inset-0"
              src="https://hackthisfall.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F29ef4591ac564588a25b4c1cb978c2bd%2Fassets%2Fcover%2F941.png&w=1440&q=100"
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0"
                  src="https://hackbyte2.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F996eb8ff28fb463aa2ce28d1729e4122%2Fassets%2Fcover%2F71.png&w=1440&q=100"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0"
                  src="https://hackhive.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Ff1a79bba9fec4817af48a38440ecd984%2Fassets%2Fcover%2F385.jpeg&w=1440&q=100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreHackathons;
