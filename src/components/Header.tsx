import Logo from "./Logo";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMenu2,
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useState } from "react";
import SocialMediaIcon from "./SocialMediaIcon";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  function toggleMenu() {
    setShowLinks((prevState) => !prevState);
  }
  return (
    <header className=" fixed left-0 right-0 top-0  z-50 bg-white">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex h-16 items-center justify-between  px-8 md:p-0">
          <Logo />
          <IconMenu2
            className="cursor-pointer font-bold text-primary-5  hover:size-9 hover:transition-all hover:duration-300 md:hidden"
            size={30}
            onClick={toggleMenu}
          />
        </div>

        <nav
          className={` transition-max-height  overflow-hidden duration-700 md:flex md:items-center md:gap-5 md:overflow-visible ${showLinks ? "max-h-64 " : "max-h-0"}`}
        >
          <NavLinks />
        </nav>

        <div className=" hidden  gap-2  md:flex md:items-center">
          <SocialMediaIcon icon={<IconBrandFacebook />} />
          <SocialMediaIcon icon={<IconBrandTwitter />} />
          <SocialMediaIcon icon={<IconBrandInstagram />} />
        </div>
      </div>
    </header>
  );
}

export default Header;
