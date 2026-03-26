"use client";

import Link from "next/link";

import { headerNavigations } from "@/app/data/headerNavigations";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      window.history.replaceState(null, "", " ");
    }
  };

  return (
    <header className="text-[#D9D9D9] fixed w-full py-5 border-b border-[#808080] bg-[#1a1a1a] dark:bg-white z-50">
      <div className="w-190 mx-auto flex justify-between items-center max-lg:px-5 max-lg:w-full">
        <Link
          href="#about"
          className="text-xl font-bold dark:text-[#1A1A1A] text-[#D9D9D9]"
          onClick={(e) => handleScroll(e, "about")}
        >
          Gerald Esteban
        </Link>
        <nav>
          <ul className="flex items-center gap-2">
            {headerNavigations.map((item) => (
              <li key={item.id} className="font-bold text-sm">
                <Link
                  href={`#${item.id}`}
                  className="hover:bg-[#424242] dark:text-[#1A1A1A] text-[#D9D9D9] hover:dark:text-white p-1 px-3 rounded-full max-md:px-1 transition-all duration-300 ease-in-out"
                  onClick={(e) => handleScroll(e, item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <ThemeToggle />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
