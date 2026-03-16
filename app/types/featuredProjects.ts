import { StaticImageData } from "next/image";

export interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  repo: string;
  link: string;
}
