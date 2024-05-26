import React from "react";
import { links } from "../data.js";
function NavLinks() {
  return (
    <ul>
      {links.map(({ id, href, text }) => (
        <li key={id}>
          <a
            href={href}
            className="block px-8 py-4 text-base tracking-[4px] transition-all duration-300 hover:bg-primary-7 hover:pl-10 "
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
