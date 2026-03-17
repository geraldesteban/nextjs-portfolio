import TechStack from "@/app/_components/Sections/TechStack";
import FeaturedProjects from "@/app/_components/Sections/Projects/FeaturedProjects";
import OtherProjects from "@/app/_components/Sections/Projects/OtherProjects";
import About from "@/app/_components/Sections/About";

function Page() {
  return (
    <main className="text-[#d9d9d9]">
      {/* About */}
      <About />
      {/* Tech Stack */}
      <TechStack />
      {/* Featured Projects */}
      <FeaturedProjects />
      {/* Other Projects */}
      <OtherProjects />
    </main>
  );
}

export default Page;
