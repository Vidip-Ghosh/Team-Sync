"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className={"mt-36 container"}>
      <div className={"grid grid-cols-2"}>
        <div>
          <h1 className={"text-6xl mb-12 font-bold flex-col space-y-4"}>
            <div>Learn!</div>
            <div
              className={
                "bg-clip-text text-transparent bg-gradient-to-br dark:from-blue-500 dark:to-violet-300 from-amber-600 to-amber-500"
              }
            >
              Explore!
            </div>
            <div>Upskill!</div>
          </h1>
          <p className={"text-xl mb-12"}>
            Team Sync is the largest and fast-growing community of technology
            innovators, including ,startups ,working-professionals, freelancers
            and student innovators
          </p>
          <div>
            <Button className={"mr-8"}>Explore hackathon</Button>
            <Button>Explore Communities</Button>
          </div>
        </div>
        <div className={"text-center"}>
          <img
            src={"/hero-image.jpg"}
            className={"rounded-2xl w-[80%] mx-auto h-full shadow-blue-200"}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
