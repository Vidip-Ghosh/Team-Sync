import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconGlobeFilled,
  IconGlobe,
} from "@tabler/icons-react";
import { Infinity, User } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Explore Hackathons",
      link: "/HackathonSec",
      icon: <IconGlobe className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Community",
      link: "/TechCommunity",
      icon: (
        <IconGlobeFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <div className="flex h-20 top-0 w-full mx-auto justify-between items-center py-4 container ">
        <div>
          <Infinity size={50} color="#95dbd6" strokeWidth={1.5} />
        </div>
        <div>
          {navItems.map((navItem) => (
            <div className={"inline-flex items-center px-10"}>
              <span className={"px-2"}>{navItem.icon}</span>
              <Link href={navItem.link}>{navItem.name}</Link>
            </div>
          ))}
        </div>
        <div className={"inline-flex space-x-4 items-center"}>
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
