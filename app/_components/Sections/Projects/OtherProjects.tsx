"use client";

import { useState } from "react";

import { otherProjects } from "@/app/data/otherProjects";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function OtherProjects() {
  const projectsPerPage = 6;
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
    <div className="text-[#d9d9d9] flex flex-col gap-5 w-190 mx-auto pb-5  max-lg:px-5 max-lg:w-full">
      <h2 className="text-xl font-bold dark:text-[#1A1A1A] text-[#D9D9D9]">
        Other Projects
      </h2>
      <div className="grid grid-cols-2 place-items-center gap-10 max-lg:grid-cols-1">
        {currentProjects.map((project, i) => (
          <div
            key={i}
            className="group w-full bg-[#1a1a1a] dark:bg-white border-[#808080] border rounded-md hover:bg-transparent"
          >
            <div className="flex flex-col gap-2.5 p-2.5 max-sm:text-sm">
              <h2 className="text-xl font-bold dark:text-[#1A1A1A] text-[#D9D9D9]">
                {project.title}
              </h2>
              <div className="flex justify-end gap-5 max-sm:gap-2 dark:text-[#1A1A1A] text-[#D9D9D9]">
                <a
                  href={project.repo}
                  target="_blank"
                  className="group/repo flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1">
                    <span>Repo</span>
                    <div className="lg:opacity-0 group-hover/repo:opacity-100">
                      <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                    </div>
                  </div>
                  <div className="border-[#808080] border-b"></div>
                </a>
                <span className="text-[#808080]">/</span>
                <a
                  href={project.link}
                  target="_blank"
                  className="group/demo flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1">
                    <span>Demo</span>
                    <div className="lg:opacity-0 group-hover/demo:opacity-100">
                      <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                    </div>
                  </div>
                  <div className="border-[#808080] border-b"></div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap max-lg:px5 max-lg:w-full max-sm:gap-5">
        <button
          className={`${currentPage + 1 === 1 ? "cursor-default" : "cursor-pointer"} text-[#808080] hover:opacity-50`}
          onClick={prevPage}
        >
          <ArrowBackIosIcon />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${currentPage + 1 === i + 1 ? "dark:text-[#1A1A1A] text-[#D9D9D9] font-bold" : "dark:text-[#1A1A1A] text-[#D9D9D9]"} text-base cursor-pointer`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`${currentPage >= totalPages - 1 ? "cursor-not-allowed" : "cursor-pointer"} text-[#808080] hover:opacity-50`}
          onClick={nextPage}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="border-[#808080] border-b"></div>
    </div>
  );
}
export default OtherProjects;
