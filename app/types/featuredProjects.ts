import { StaticImageData } from "next/image";

export interface FeaturedProjectsTypes {
  image: StaticImageData;
  title: string;
  description: string;
  repo: string;
  link: string;
}
