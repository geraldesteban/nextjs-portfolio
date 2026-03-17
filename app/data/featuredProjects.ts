import { FeaturedProjectsTypes } from "@/app/types/featuredProjects";

import ReactPersonalFinance from "@/app/_assets/FeaturedProjects/ReactPersonalFinance.png";
import NextJSAudiophileEcommerce from "@/app/_assets/FeaturedProjects/NextJSAudiophileEcommerce.png";
import ReactTWO from "@/app/_assets/FeaturedProjects/ReactTWO.png";
import NextJSTWO from "@/app/_assets/FeaturedProjects/NextJSTWO.png";
import NextJSWeddingInvitation from "@/app/_assets/FeaturedProjects/NextJSWeddingInvitation.png";
import RestCountriesAPI from "@/app/_assets/FeaturedProjects/RestCountriesAPI.png";

export const featuredProjects: FeaturedProjectsTypes[] = [
  {
    image: ReactPersonalFinance,
    title: "React Personal Finance App",
    description:
      "A Full Stack Personal Finance app, a challenge from Frontend Mentor at Guru difficulty.",
    repo: "https://github.com/geraldesteban/react-personal-finance-app",
    link: "https://gce-react-personal-finance.vercel.app/login",
  },
  {
    image: NextJSAudiophileEcommerce,
    title: "Next.js Audiophile App",
    description:
      "A Full Stack Audiophile E-Commerce app, a challenge from Frontend Mentor at Guru difficulty.",
    repo: "https://github.com/geraldesteban/nextjs-audiophile-app",
    link: "https://github.com/geraldesteban/nextjs-audiophile-app",
  },
  {
    image: ReactTWO,
    title: "React The Wild Oasis App",
    description:
      "A Full Stack Wild Oasis app (Admin POV) built with React from a Udemy tutorial.",
    repo: "https://github.com/geraldesteban/nextjs-the-wild-oasis",
    link: "https://gce-react-the-wild-oasis.vercel.app/",
  },
  {
    image: NextJSTWO,
    title: "Next.js The Wild Oasis App",
    description:
      "A Full Stack Wild Oasis app (User POV) built with Next.js from a Udemy tutorial.",
    repo: "https://github.com/geraldesteban/nextjs-the-wild-oasis",
    link: "https://gce-nextjs-the-wild-oasis.vercel.app/",
  },
  {
    image: NextJSWeddingInvitation,
    title: "Next.js Wedding Invitation App",
    description:
      "A Wedding Invitation app built with Next.js, Tailwind CSS, and Supabase.",
    repo: "https://github.com/geraldesteban/wedding-invitation-one",
    link: "https://aris-jane-wedding.vercel.app/",
  },
  {
    image: RestCountriesAPI,
    title: "REST Countries API App",
    description:
      "A REST Countries API app built with JavaScript, Tailwind CSS, and REST Countries API.",
    repo: "https://github.com/geraldesteban/project-rest-countries-api",
    link: "https://rest-countries-api-gce.vercel.app/",
  },
];
