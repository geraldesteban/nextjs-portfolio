import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

/* Home Page */
function Page() {
  return (
    <main className="text-[#d9d9d9]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2.5">
          <h2 className="font-bold text-5xl">Hi, I&apos;m Gerald Esteban</h2>
          <p className="text-base">
            A Web Developer who is experienced in building web applications with
            JavaScript, TypeScript, React, Next.js, and Supabase.
          </p>
        </div>
        <div className="text-base flex gap-5">
          <a
            href="https://github.com/geraldesteban"
            className="flex gap-1 items-center p-1 border-[1px] rounded-sm"
            target="_blank"
          >
            <GitHubIcon />
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/geraldesteban"
            className="flex gap-1 items-center p-1 border-[1px] rounded-sm"
            target="_blank"
          >
            <LinkedInIcon />
            LINKEDIN
          </a>
          <a
            href="#"
            className="flex gap-1 items-center p-1 border-[1px] rounded-sm"
            target="_blank"
          >
            <EmailIcon />
            EMAIL
          </a>
          <a
            href="#"
            className="flex gap-1 items-center p-1 border-[1px] rounded-sm"
            target="_blank"
          >
            <ArticleIcon />
            RESUME
          </a>
        </div>
      </div>
    </main>
  );
}

export default Page;
