import Logo from "./Logo";
import { IconMenu2 } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useState } from "react";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  function toggleMenu() {
    setShowLinks((prevState) => !prevState);
  }
  return (
    <header>
      <div className="flex h-16 items-center justify-between  px-8 ">
        <Logo />
        <IconMenu2
          className="cursor-pointer font-bold text-primary-5  hover:size-9 hover:transition-all hover:duration-300"
          size={30}
          onClick={toggleMenu}
        />
      </div>

      <nav
        className={`transition-max-height overflow-hidden duration-700 ${showLinks ? "max-h-64 " : "max-h-0"}`}
      >
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;
