"use client";

import Link from "next/link";

import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header() {
  return (
    <header className="flex justify-between py-5 px-56 text-white bg-[#1a1a1a] border-b-[0.1px]">
      <h2 className="text-xl font-bold text-[#d9d9d9]">Gerald Esteban</h2>
      <nav>
        <ul className="flex items-center gap-10 text-[#d9d9d9]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <DarkModeIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
