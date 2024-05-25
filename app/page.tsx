"use client";
import React from "react";
import Navbar from "@/app/(browse)/_components/navbar/Navbar";

const Page = () => {
  return (
    <nav
      className={
        "top-0 w-full h-20 px-2 lg:px-4 flex justify-between items-center"
      }
    >
      <Navbar />
    </nav>
  );
};

export default Page;
