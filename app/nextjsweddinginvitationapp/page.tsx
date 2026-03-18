import Link from "next/link";
import Image from "next/image";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import PFA1 from "@/app/_assets/NextJSWeddingInvitationApp/1.png";
import PFA2 from "@/app/_assets/NextJSWeddingInvitationApp/2.png";
import PFA3 from "@/app/_assets/NextJSWeddingInvitationApp/3.png";

function Page() {
  return (
    <div className="text-[#D9D9D9] w-190 mx-auto py-10 max-lg:px-5 max-lg:w-full">
      <div className="flex flex-col gap-10">
        {/* Go back */}
        <Link href="/" className="flex items-center gap-1">
          <ArrowBackIcon sx={{ fontSize: 20 }} />
          <span>Back</span>
        </Link>
        {/* Title and Description */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Next.js Wedding Invitation App</h2>
          <p>
            A Wedding Invitation App where guests can view event details and
            submit their RSVP.
          </p>
          <div className="border-[#808080] border-b"></div>
        </div>
        {/* Repo and Demo */}
        <div className="flex gap-5 max-md:text-sm">
          <a
            href="https://github.com/geraldesteban/wedding-invitation-one"
            target="_blank"
            className="group/repo flex flex-col gap-2"
          >
            <div className="flex items-center gap-1">
              <span>View Repository</span>
              <div className="opacity-0 group-hover/repo:opacity-100">
                <ArrowOutwardIcon sx={{ fontSize: 15 }} />
              </div>
            </div>
            <div className="border-[#808080] border-b"></div>
          </a>
          <span className="text-[#808080]">/</span>
          <a
            href="https://aris-jane-wedding.vercel.app/"
            target="_blank"
            className="group/demo flex flex-col gap-2"
          >
            <div className="flex items-center gap-1">
              <span>View Live Demo</span>
              <div className="opacity-0 group-hover/demo:opacity-100">
                <ArrowOutwardIcon sx={{ fontSize: 15 }} />
              </div>
            </div>
            <div className="border-[#808080] border-b"></div>
          </a>
        </div>
        {/* Images */}
        <div className="grid gap-5">
          <Image src={PFA1} alt="Login" quality={100} />
          <Image src={PFA2} alt="Overview" quality={100} />
          <Image src={PFA3} alt="Transactions" quality={100} />
        </div>
        {/* Highlights */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Highlights</h2>
          <p>- View wedding details.</p>
          <p>- Submit RSVP.</p>
          <div className="border-[#808080] border-b"></div>
        </div>
        {/* Tech Stack Used */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Technologies</h2>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="border rounded-full px-2 py-1">Vite</span>
            <span className="border rounded-full px-2 py-1">JavaScript</span>
            <span className="border rounded-full px-2 py-1">Tailwind</span>
            <span className="border rounded-full px-2 py-1">Next.js</span>
            <span className="border rounded-full px-2 py-1">Supabase</span>
          </div>
          <div className="border-[#808080] border-b"></div>
        </div>
        {/* Repo and Demo */}
        <div className="flex gap-5 max-md:text-sm">
          <a
            href="https://github.com/geraldesteban/wedding-invitation-one"
            target="_blank"
            className="group/repo flex flex-col gap-2"
          >
            <div className="flex items-center gap-1">
              <span>View Repository</span>
              <div className="opacity-0 group-hover/repo:opacity-100">
                <ArrowOutwardIcon sx={{ fontSize: 15 }} />
              </div>
            </div>
            <div className="border-[#808080] border-b"></div>
          </a>
          <span className="text-[#808080]">/</span>
          <a
            href="https://aris-jane-wedding.vercel.app/"
            target="_blank"
            className="group/demo flex flex-col gap-2"
          >
            <div className="flex items-center gap-1">
              <span>View Live Demo</span>
              <div className="opacity-0 group-hover/demo:opacity-100">
                <ArrowOutwardIcon sx={{ fontSize: 15 }} />
              </div>
            </div>
            <div className="border-[#808080] border-b"></div>
          </a>
        </div>
        {/* Go back */}
        <Link href="/" className="flex items-center gap-1">
          <ArrowBackIcon sx={{ fontSize: 20 }} />
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
}
export default Page;
