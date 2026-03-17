import TechStack from "@/app/_components/Sections/TechStack";
import FeaturedProjects from "@/app/_components/Sections/Projects/FeaturedProjects";
import OtherProjects from "@/app/_components/Sections/Projects/OtherProjects";
import About from "@/app/_components/Sections/About";
import Header from "./_components/Header";
import Footer from "./footer";

function Page() {
  return (
    <main className="text-[#d9d9d9]">
      {/* Navigation Bar */}
      <Header />
      {/* About */}
      <About />
      {/* Tech Stack */}
      <TechStack />
      {/* Featured Projects */}
      <FeaturedProjects />
      {/* Other Projects */}
      <OtherProjects />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Page;
