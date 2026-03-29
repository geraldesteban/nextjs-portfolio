export const metadata = {
  title: "Skills",
};

function TechStack() {
  return (
    <div
      id="techStack"
      className="text-[#D9D9D9] flex flex-col gap-5 w-190 mx-auto scroll-mt-20 pb-5 max-lg:px-5 max-lg:w-full max-md:scroll-mt-32"
    >
      <h2 className="text-xl font-bold dark:text-[#1A1A1A] text-[#D9D9D9]">
        Tech Stack
      </h2>
      {/* Languages */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-[#808080]">Languages</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-javascript-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">JavaScript</h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-typescript-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">TypeScript</h2>
          </div>
        </div>
      </div>
      {/* Frontend */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-[#808080]">Frontend</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-react-original dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">React</h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-nextjs-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Next.js</h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-tailwindcss-original dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Tailwind</h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-sass-original dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Sass</h2>
          </div>
        </div>
      </div>
      {/* Backend */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-[#808080]">Backend</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <i
              className="devicon-nodejs-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Node.js</h2>
          </div>
        </div>
      </div>
      {/* Database */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-[#808080]">Database</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-supabase-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Supabase</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-mongodb-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">MongoDB</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-mongoose-original dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Mongoose</h2>
          </div>
        </div>
      </div>
      {/* Developer Tools */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-[#808080]">Developer Tools</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-vscode-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">VS Code</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-git-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>

            <h2 className="text-xs text-[#808080]">Git</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-github-original dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>
            <h2 className="text-xs text-[#808080]">Github</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-vercel-original dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>

            <h2 className="text-xs text-[#808080]">Vercel</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i
              className="devicon-vscode-plain dark:text-[#1A1A1A] text-[#D9D9D9]"
              style={{ fontSize: "30px" }}
            ></i>{" "}
            <h2 className="text-xs text-[#808080]">VS Code</h2>
          </div>
        </div>
      </div>
      <div className="border-[#808080] border-b"></div>
    </div>
  );
}

export default TechStack;
