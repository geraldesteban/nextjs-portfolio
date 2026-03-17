import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

function SocialLinks() {
  return (
    <div className=" text-[#D9D9D9] text-sm flex flex-wrap gap-5 max-lg:w-full max-lg:gap-2">
      <a
        href="https://github.com/geraldesteban"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#808080] bg-[#141414] hover:bg-transparent hover:border-[#D9D9D9]"
        target="_blank"
      >
        <GitHubIcon />
        GITHUB
      </a>
      <a
        href="https://www.linkedin.com/in/geraldesteban"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#808080] bg-[#141414] hover:bg-transparent hover:border-[#D9D9D9]"
        target="_blank"
      >
        <LinkedInIcon />
        LINKEDIN
      </a>
      <a
        href="mailto:wakin.esteban@gmail.com"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#808080] bg-[#141414] hover:bg-transparent hover:border-[#D9D9D9]"
        target="_blank"
      >
        <EmailIcon />
        EMAIL
      </a>
      <a
        href="/resume.pdf"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#808080] bg-[#141414] hover:bg-transparent hover:border-[#D9D9D9]"
        target="_blank"
        download
      >
        <ArticleIcon />
        RESUME
      </a>
    </div>
  );
}
export default SocialLinks;
