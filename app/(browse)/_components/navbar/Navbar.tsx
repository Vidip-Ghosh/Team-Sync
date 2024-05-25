import React from "react";
import { useUser } from "@clerk/nextjs";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Infinity } from "lucide-react";

const Navbar = () => {
  const user = useUser();
  console.log(user);

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
  ];
  return (
    <>
      <nav
        className={
          "top-0 w-full h-20 px-2 lg:px-4 flex justify-between items-center"
        }
      >
        Team
        <span className={"flex items-center"}>
          <Infinity size={28} color="#95dbd6" strokeWidth={1.5} />
        </span>
        Sync
      </nav>
    </>
  );
};

export default Navbar;

// <div className={"flex items-center justify-end gap-x-2 ml-4 lg:ml-0"}></div>;
{
  /*  {!user && (*/
}
{
  /*    <SignInButton>*/
}
{
  /*      <Button>Login</Button>*/
}
{
  /*    </SignInButton>*/
}
{
  /*  )}*/
}
{
  /*  {!!user && (*/
}
{
  /*    <div className={"flex items-center gap-x-4"}>*/
}
{
  /*      <Button*/
}
{
  /*        className={"text-muted-foreground hover:text-primary"}*/
}
{
  /*        size={"sm"}*/
}
{
  /*        variant={"ghost"}*/
}
{
  /*        asChild*/
}
{
  /*      ></Button>*/
}
{
  /*    </div>*/
}
{
  /*  )}*/
}
{
  /*</div>*/
}
