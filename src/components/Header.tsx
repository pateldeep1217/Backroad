import React from "react";
import Logo from "./Logo";
import { IconMenu2 } from "@tabler/icons-react";

function Header() {
  return (
    <header className="">
      <div className="container mx-auto  flex h-16 items-center justify-between">
        <Logo />
        <IconMenu2 className="text-primary-5 cursor-pointer font-bold hover:size-8 hover:transition-all hover:duration-300" />
      </div>
    </header>
  );
}

export default Header;
