import Link from "next/link";
import Image from "next/image";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import PFA1 from "@/app/_assets/ReactPersonalFinanceApp/1.png";
import PFA2 from "@/app/_assets/ReactPersonalFinanceApp/2.png";
import PFA3 from "@/app/_assets/ReactPersonalFinanceApp/3.png";
import PFA4 from "@/app/_assets/ReactPersonalFinanceApp/4.png";
import PFA5 from "@/app/_assets/ReactPersonalFinanceApp/5.png";
import PFA6 from "@/app/_assets/ReactPersonalFinanceApp/6.png";

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
          <h2 className="text-xl font-bold">React Personal Finance App</h2>
          <p>
            A Full Stack Personal Finance app, a challenge from Frontend Mentor
            at Guru difficulty.
          </p>
          <div className="border-[#808080] border-b"></div>
        </div>
        {/* Repo and Demo */}
        <div className="flex gap-5 max-md:text-sm">
          <a
            href="https://github.com/geraldesteban/react-personal-finance-app"
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
            href="https://gce-react-personal-finance.vercel.app/login"
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
          <Image src={PFA4} alt="Budgets" quality={100} />
          <Image src={PFA5} alt="Pots" quality={100} />
          <Image src={PFA6} alt="Recurring Bills" quality={100} />
        </div>
        {/* Highlights */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Highlights</h2>
          <p>
            - Built from scratch based on the design and requirements from a
            Frontend Mentor challenge, implementing a full stack personal
            finance app with overview, transactions, budgets, pots, and
            recurring bills.
          </p>
          <p>
            - Added search, sort, filter, and pagination for transactions and
            bills.
          </p>

          <p>
            - Implemented CRUD features, validation, and progress tracking for
            savings pots.
          </p>
          <p>- Ensured responsive design.</p>
          <p>
            - Integrated database and user authentication for a full-stack
            setup.
          </p>
          <div className="border-[#808080] border-b"></div>
        </div>
        {/* Tech Stack Used */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Technologies</h2>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="border rounded-full px-2 py-1">Vite</span>
            <span className="border rounded-full px-2 py-1">JavaScript</span>
            <span className="border rounded-full px-2 py-1">Tailwind</span>
            <span className="border rounded-full px-2 py-1">React</span>
            <span className="border rounded-full px-2 py-1">React Router</span>
            <span className="border rounded-full px-2 py-1">React Query</span>
            <span className="border rounded-full px-2 py-1">Supabase</span>
            <span className="border rounded-full px-2 py-1">Vercel</span>
          </div>
          <div className="border-[#808080] border-b"></div>
        </div>
        {/* Repo and Demo */}
        <div className="flex gap-5 max-md:text-sm">
          <a
            href="https://github.com/geraldesteban/react-personal-finance-app"
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
            href="https://gce-react-personal-finance.vercel.app/login"
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
