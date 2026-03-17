export const metadata = {
  title: "Skills",
};

function TechStack() {
  return (
    <div
      id="techStack"
      className="text-[#D9D9D9] flex flex-col gap-5 w-190 mx-auto scroll-mt-20 pb-5  max-lg:px-5 max-lg:w-full max-md:scroll-mt-28"
    >
      <h2 className="text-3xl font-bold">Tech Stack</h2>
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {/* Languages */}
        <div className="flex flex-col gap-5 p-2.5 border border-[#808080]">
          <h2 className="text-base font-bold text-[#808080]">Languages</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-javascript-plain"
                style={{ fontSize: "30px" }}
              ></i>
              <h2 className="text-xs text-[#808080]">JavaScript</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-typescript-plain"
                style={{ fontSize: "30px" }}
              ></i>
              <h2 className="text-xs text-[#808080]">TypeScript</h2>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="flex flex-col gap-5 p-2.5 border border-[#808080]">
          <h2 className="text-base font-bold text-[#808080]">Frontend</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-react-original"
                style={{ fontSize: "30px" }}
              ></i>{" "}
              <h2 className="text-xs text-[#808080]">React</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-nextjs-plain"
                style={{ fontSize: "30px" }}
              ></i>{" "}
              <h2 className="text-xs text-[#808080]">Next.js</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-tailwindcss-original"
                style={{ fontSize: "30px" }}
              ></i>
              <h2 className="text-xs text-[#808080]">Tailwind</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-sass-original"
                style={{ fontSize: "30px" }}
              ></i>
              <h2 className="text-xs text-[#808080]">SASS</h2>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col gap-5 p-2.5 border border-[#808080]">
          <h2 className="text-base font-bold text-[#808080]">Backend</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-nodejs-plain"
                style={{ fontSize: "30px" }}
              ></i>
              <h2 className="text-xs text-[#808080]">Node.js</h2>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="flex flex-col gap-5 p-2.5 border border-[#808080]">
          <h2 className="text-base font-bold text-[#808080]">Database</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-supabase-plain"
                style={{ fontSize: "30px" }}
              ></i>
              <h2 className="text-xs text-[#808080]">Supabase</h2>
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className="flex flex-col gap-5 p-2.5 border border-[#808080]">
          <h2 className="text-base font-bold text-[#808080]">
            Developer Tools
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-vscode-plain"
                style={{ fontSize: "30px" }}
              ></i>{" "}
              <h2 className="text-xs text-[#808080]">VS Code</h2>
            </div>

            <div className="flex flex-col items-center gap-3">
              <i className="devicon-git-plain" style={{ fontSize: "30px" }}></i>{" "}
              <h2 className="text-xs text-[#808080]">Git</h2>
            </div>

            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-github-original"
                style={{ fontSize: "30px" }}
              ></i>{" "}
              <h2 className="text-xs text-[#808080]">Github</h2>
            </div>

            <div className="flex flex-col items-center gap-3">
              <i
                className="devicon-vercel-original"
                style={{ fontSize: "30px" }}
              ></i>{" "}
              <h2 className="text-xs text-[#808080]">Vercel</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="border-white border-b-10"></div>
    </div>
  );
}

export default TechStack;
