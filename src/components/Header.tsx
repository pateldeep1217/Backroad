import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header className="">
      <div className="container mx-auto  flex h-16 items-center">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
