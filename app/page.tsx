"use client";
import React from "react";
import Navbar from "@/app/(browse)/_components/navbar/Navbar";
import Home from "@/app/(browse)/_components/home/Home";

const Page = () => {
  return (
    <div className={"container"}>
      <Navbar />
      <Home />
    </div>
  );
};

export default Page;
