import { links } from "../data/data";
export interface Link {
  id: number;
  href: string;
  text: string;
}

function NavLinks() {
  return (
    <ul className=" md:flex md:gap-5">
      {links.map(({ id, href, text }: Link) => (
        <li key={id}>
          <a
            href={href}
            className=" block px-8 py-4 text-base tracking-[4px] transition-all duration-300 hover:bg-primary-7 hover:pl-10 md:p-0
            md:hover:bg-transparent 
            md:hover:p-0
            md:hover:text-primary-5
            "
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
