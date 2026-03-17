"use client";

import Link from "next/link";

import { headerNavigations } from "@/app/data/headerNavigations";

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
    <header className="text-[#D9D9D9] fixed w-full py-5 border-b border-[#808080] bg-[#1a1a1a] z-50">
      <div className="w-190 mx-auto flex justify-between items-center max-lg:px-5 max-lg:w-full">
        <Link href="/" className="text-xl font-bold">
          Gerald Esteban
        </Link>
        <nav>
          <ul className="flex items-center gap-2 max-sm:gap-0">
            {headerNavigations.map((item) => (
              <li key={item.id} className="font-bold text-sm">
                <Link
                  href={`#${item.id}`}
                  className="hover:bg-[#424242] p-1 px-3 rounded-full max-md:px-1"
                  onClick={(e) => handleScroll(e, item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
