import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/app/data/featuredProjects";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const metadata = {
  title: "Projects / Featured Projects",
};

function Page() {
  return (
    <div className="text-[#d9d9d9] m-10">
      <div className="flex justify-center items-center gap-5">
        <h2 className="text-5xl font-bold pb-10">
          <Link href="projects">Featured Projects</Link>
        </h2>
        <h2 className="text-5xl font-bold pb-10">
          <Link href="projects/otherprojects">Others</Link>
        </h2>
      </div>
      {/* Featured Projects */}
      <div className="flex justify-center flex-wrap gap-10">
        {featuredProjects.map((project, i) => (
          <div key={i} className="w-[450px] border-[#808080] border-b-[1px]">
            <div className="w-full h-[250px] relative">
              <Image
                src={project.image}
                alt={project.title}
                quality={100}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2.5 p-2.5">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-base text-[#808080]">{project.description}</p>
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
      {/* Other Projects */}
      {/* <div className="flex justify-center flex-wrap gap-10">
        {otherProjects.map((project, i) => (
          <div key={i} className="w-[450px] border-b-[0.1px]">
            <div className="p-2.5">
              <h2 className="text-base font-bold">{project.title}</h2>

              <p className="text-base">{project.description}</p>

              <div className="flex justify-end gap-5">
                <a href={project.repo} target="_blank">
                  <span className="border-b-[0.1px]">Repo</span>
                </a>
                <span className="font-light">/</span>
                <a href={project.link} target="_blank">
                  <span className="border-b-[0.1px]">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> 
      */}
    </div>
  );
}

export default Page;
