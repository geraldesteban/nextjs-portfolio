import Image from "next/image";

import { featuredProjects } from "@/app/data/featuredProjects";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

function FeaturedProjects() {
  return (
    <div
      id="projects"
      className="text-[#d9d9d9] flex flex-col gap-5 w-190 mx-auto scroll-mt-20 pb-5 max-lg:px-5 max-lg:w-full max-md:scroll-mt-32"
    >
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      {/* Featured Projects */}
      <div className="flex flex-col gap-10">
        {featuredProjects.map((project, i) => (
          <div
            key={i}
            className="group border-[#808080] hover:border-[#D9D9D9] border-b cursor-pointer"
          >
            <div className="w-full h-100 relative max-md:h-80 max-sm:h-60">
              <Image
                src={project.image}
                alt={project.title}
                quality={100}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2.5 p-2.5">
              <div className="flex items-center gap-5">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <span
                  className={`${project.status === "Ongoing" ? "text-green-500" : "text-[#D9D9D9]"}`}
                >
                  {project.status === "Ongoing" ? "Ongoing" : ""}
                </span>
              </div>
              <p className="text-[#808080] group-hover:text-[#D9D9D9]">
                {project.description}
              </p>
              <div className="flex justify-between max-sm:text-sm">
                {project.status === "Finished" ? (
                  <>
                    <Link
                      href={project.details}
                      className="group/details flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-1">
                        <span>View Details</span>
                        <div className="opacity-0 group-hover/details:opacity-100">
                          <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                        </div>
                      </div>
                      <div className="border-[#808080] border-b"></div>
                    </Link>
                    <div className="flex gap-5 max-sm:gap-2">
                      <a
                        href={project.repo}
                        target="_blank"
                        className="group/repo flex flex-col gap-2"
                      >
                        <div className="flex items-center gap-1">
                          <span>Repo</span>
                          <div className="opacity-0 group-hover/repo:opacity-100">
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
                          <div className="opacity-0 group-hover/demo:opacity-100">
                            <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                          </div>
                        </div>
                        <div className="border-[#808080] border-b"></div>
                      </a>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-white border-b-10"></div>
    </div>
  );
}

export default FeaturedProjects;
