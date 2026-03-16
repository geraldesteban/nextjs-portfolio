import StackIcon from "tech-stack-icons";

function Page() {
  return (
    <div className="text-[#d9d9d9]">
      <h2 className="text-5xl text-center pb-10">Skills & Tools</h2>
      <div className="flex justify-center flex-wrap gap-16 border-[0.1px] border-gray-500 mx-20 p-10">
        <div className="flex flex-col items-center gap-3">
          <StackIcon name="html5" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">HTML</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="css3" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">CSS</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="js" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">JavaScript</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon
            name="typescript"
            variant="grayscale"
            className="w-16 h-16"
          />
          <h2 className="text-xs">TypeScript</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="sass" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">SASS</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon
            name="tailwindcss"
            variant="grayscale"
            className="w-16 h-16"
          />
          <h2 className="text-xs">Tailwind CSS</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon
            name="materialui"
            variant="grayscale"
            className="w-16 h-16"
          />
          <h2 className="text-xs">Material UI</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="react" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">React</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon
            name="reactquery"
            variant="grayscale"
            className="w-16 h-16"
          />
          <h2 className="text-xs">React Query</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="nextjs2" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">Next.js</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon
            name="supabase"
            variant="grayscale"
            className="w-16 h-16"
          />
          <h2 className="text-xs">Supabase</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="git" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">Git</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="github" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">Github</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="vscode" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">Visual Studio Code</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <StackIcon name="vercel" variant="grayscale" className="w-16 h-16" />
          <h2 className="text-xs">Vercel</h2>
        </div>
      </div>
    </div>
  );
}

export default Page;
