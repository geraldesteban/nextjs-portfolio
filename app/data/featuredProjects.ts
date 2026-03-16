import { Project } from "@/app/types/featuredProjects";

import ReactPersonalFinance from "@/app/_assets/FeaturedProjects/ReactPersonalFinance.png";
import NextJSTWO from "@/app/_assets/FeaturedProjects/NextJSTWO.png";
import ReactWeddingInvitation from "@/app/_assets/FeaturedProjects/WeddingInvitation.png";
import RestCountriesAPI from "@/app/_assets/FeaturedProjects/RestCountriesAPI.png";

export const featuredProjects: Project[] = [
  {
    image: ReactPersonalFinance,
    title: "React Personal Finance App",
    description:
      "A Full Stack Personal Finance app, a challenge from Frontend Mentor at Guru difficulty.",
    repo: "https://github.com/geraldesteban/react-personal-finance-app",
    link: "https://gce-react-personal-finance.vercel.app/login",
  },
  {
    image: ReactPersonalFinance,
    title: "NextJS Audiophile App",
    description:
      "A Full Stack Audiophile E-Commerce app, a challenge from Frontend Mentor at Guru difficulty.",
    repo: "https://github.com/geraldesteban/nextjs-audiophile-app",
    link: "https://github.com/geraldesteban/nextjs-audiophile-app",
  },
  {
    image: NextJSTWO,
    title: "React The Wild Oasis App",
    description:
      "A Full Stack Wild Oasis app (Admin POV) built with React from a Udemy tutorial.",
    repo: "https://github.com/geraldesteban/nextjs-the-wild-oasis",
    link: "https://gce-nextjs-the-wild-oasis.vercel.app/",
  },
  {
    image: NextJSTWO,
    title: "NextJS The Wild Oasis App",
    description:
      "A Full Stack Wild Oasis app (User POV) built with Next.js from a Udemy tutorial.",
    repo: "https://github.com/geraldesteban/nextjs-the-wild-oasis",
    link: "https://gce-nextjs-the-wild-oasis.vercel.app/",
  },
  {
    image: ReactWeddingInvitation,
    title: "React Wedding Invitation",
    description:
      "A Full Stack Wild Oasis app (User POV) built with Next.js from a Udemy tutorial.",
    repo: "https://github.com/geraldesteban/wedding-invitation-one",
    link: "https://aris-jane-wedding.vercel.app/",
  },
  {
    image: RestCountriesAPI,
    title: "Rest Countries API",
    description:
      "I created this simple game along when learning JavaScript DOM. I only use pure HTML, CSS, and JavaScript.",
    repo: "https://github.com/geraldesteban/project-rest-countries-api",
    link: "https://rest-countries-api-gce.vercel.app/",
  },
];
