"use client";

import Link from "next/link";

import { otherProjects } from "@/app/data/otherProjects";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
/* 
export const metadata = {
  title: "Projects / Others",
};
 */
function Page() {
  const projectsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(otherProjects.length / projectsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1)
      setCurrentPage((next) => (next + 1) % totalPages);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => (prev - 1) % totalPages);
  };

  const start = currentPage * projectsPerPage;
  const currentProjects = otherProjects.slice(start, start + projectsPerPage);

  return (
    <div className="text-[#d9d9d9] m-10">
      <div className="flex justify-center items-center gap-5">
        <h2 className="text-5xl font-bold pb-10">
          <Link href="/projects">Featured Projects</Link>
        </h2>
        <h2 className="text-5xl font-bold pb-10">
          <Link href="/projects/otherprojects">Others</Link>
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        {currentProjects.map((project, i) => (
          <div key={i} className="w-full border-b-[0.1px] mx-96">
            <div className="flex flex-col gap-2.5 p-2.5">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-base">{project.description}</p>
              <div className="flex justify-end gap-5">
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1">
                    <span>Repo</span>
                    <div className="opacity-0">
                      <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                    </div>
                  </div>
                  <div className="border-[#808080] border-b-[1px]"></div>
                </a>
                <span className="text-[#808080]">/</span>
                <a
                  href={project.link}
                  target="_blank"
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1">
                    <span>Demo</span>
                    <div className="opacity-0">
                      <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                    </div>
                  </div>
                  <div className="border-[#808080] border-b-[1px]"></div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 mt-11">
        <button className="cursor-pointer" onClick={prevPage}>
          <ArrowBackIosIcon />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${currentPage} cursor-pointer`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button className="cursor-pointer" onClick={nextPage}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}
export default Page;
