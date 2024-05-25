import MoreHackathons from "@/components/MoreHackathons";
import Footer from "@/components/Footer";
import ChatSection from "@/components/ChatSection";
import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-gray-600 body-font bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <NavBar />
      {children}
      <ChatSection />
      <MoreHackathons />
      <Footer />
    </div>
  );
};

export default layout;
