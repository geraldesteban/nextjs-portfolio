import Image from "next/image";
import NextJSTWO from "@/app/_assets/FeaturedProjects/NextJSTWO.png";
import ReactWeddingInvitation from "@/app/_assets/FeaturedProjects/WeddingInvitation.png";

export const metadata = {
  title: "Projects",
};

function Page() {
  const featuredProjects = [
    {
      image: NextJSTWO,
      title: "NextJS The Wild Oasis",
      description:
        "A Full Stack Wild Oasis app (User POV) built with Next.js from a Udemy tutorial.",
      repo: "https://github.com/geraldesteban/nextjs-the-wild-oasis",
      link: "https://gce-nextjs-the-wild-oasis.vercel.app/",
    },
    {
      image: NextJSTWO,
      title: "React Personal Finance App",
      description:
        "A Full Stack Wild Oasis app (User POV) built with Next.js from a Udemy tutorial.",
      repo: "https://github.com/geraldesteban/react-personal-finance-app",
      link: "https://gce-react-personal-finance.vercel.app/login",
    },
    {
      image: ReactWeddingInvitation,
      title: "React Wedding Invitation",
      description:
        "A Full Stack Wild Oasis app (User POV) built with Next.js from a Udemy tutorial.",
      repo: "https://github.com/geraldesteban/wedding-invitation-one",
      link: "https://aris-jane-wedding.vercel.app/",
    },
  ];

  const otherProjects = [
    {
      title: "Pig Game",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/pig-game",
      link: "https://pig-game-gce.netlify.app/",
    },
    {
      title: "Guess My Number",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/guess-my-number",
      link: "https://guess-my-number-gce.netlify.app/",
    },
    {
      title: "Web Lab Case Study Static",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/web-lab-case-study-static",
      link: "https://frontend-mentor-gce.netlify.app/",
    },
    {
      title: "Multimodal Text Conversion",
      description:
        "Text conversion using tesseract.js and web speech recognition.",
      repo: "https://github.com/geraldesteban/multimodal-text-conversion",
      link: "https://multi-interaction-text-conversion.netlify.app/",
    },
    {
      title: "Project Rest Countries API",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/project-rest-countries-api",
      link: "https://rest-countries-api-gce.vercel.app/",
    },
    {
      title: "Age Calculator App",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/age-calculator-app",
      link: "https://age-calculator-app-gce.vercel.app/",
    },

    {
      title: "Tip Calculator App",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/tip-calculator-app",
      link: "https://tip-calculator-app-gce.vercel.app/",
    },
    {
      title: "Museo ng Kanlahi",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/museo-ng-kanlahi",
      link: "https://museo-ng-kanlahi.netlify.app/",
    },
    {
      title: "React Social Link Profile",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/react-social-link-profile",
      link: "https://react-social-link-profile.vercel.app/",
    },

    {
      title: "React Recipe Page",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/react-recipe-page",
      link: "https://react-recipe-page.vercel.app/",
    },
    {
      title: "React FAQ Accordion",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/react-interactive-rating-component",
      link: "https://react-faq-accordion-gce.vercel.app/",
    },
    {
      title: "React Interactive Rating Component",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/react-interactive-rating-component",
      link: "https://react-interactive-rating-component-gce.vercel.app/",
    },
    {
      title: "React Ping Single Column Page",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/react-ping-single-column-coming-soon-page",
      link: "https://react-ping-single-column-coming-soon-page.vercel.app/",
    },
    {
      title: "React Base Apparel Page",
      description:
        "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
      repo: "https://github.com/geraldesteban/react-base-apparel-coming-soon-page",
      link: "https://react-base-apparel-component-page.vercel.app/",
    },
  ];

  return (
    <div className="text-[#d9d9d9]">
      <h2 className="text-5xl text-center pb-10">Featured Projects</h2>
      {/* Featured Projects */}
      <div className="flex justify-center flex-wrap gap-10">
        {featuredProjects.map((project, i) => (
          <div key={i} className="w-[450px] border-b-[0.1px]">
            <Image src={project.image} quality={80} alt={project.title} />

            <div className="p-2.5">
              <h2 className="text-5xl font-bold">{project.title}</h2>

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
      {/* Other Projects */}
      <div className="flex justify-center flex-wrap gap-10">
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
    </div>
  );
}

export default Page;
