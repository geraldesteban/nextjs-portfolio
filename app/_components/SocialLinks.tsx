import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

function SocialLinks() {
  return (
    <div className="text-[#39aacc] text-xs flex flex-wrap gap-3">
      <a
        href="https://github.com/geraldesteban"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#39aacc] bg-[#1a1a1a] dark:bg-white hover:bg-transparent hover:border-[#256f94]"
        target="_blank"
      >
        <GitHubIcon sx={{ fontSize: 20 }} />
        GITHUB
      </a>
      <a
        href="https://www.linkedin.com/in/geraldesteban"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#39aacc] bg-[#1a1a1a] dark:bg-white hover:bg-transparent hover:border-[#256f94]"
        target="_blank"
      >
        <LinkedInIcon sx={{ fontSize: 20 }} />
        LINKEDIN
      </a>
      <a
        href="mailto:wakin.esteban@gmail.com"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#39aacc] bg-[#1a1a1a] dark:bg-white hover:bg-transparent hover:border-[#256f94]"
        target="_blank"
      >
        <EmailIcon sx={{ fontSize: 20 }} />
        EMAIL
      </a>
      <a
        href="/Gerald_Esteban_Resume"
        className="flex gap-1 items-center p-1 border rounded-sm border-[#39aacc] bg-[#1a1a1a] dark:bg-white hover:bg-transparent hover:border-[#256f94]"
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
