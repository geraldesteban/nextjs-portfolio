import SocialLinks from "@/app/_components/SocialLinks";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-190 mx-auto gap-5 pt-28 pb-5 max-lg:px-5 max-lg:w-full max-md:pt-36"
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-5xl">Hi, I&apos;m Gerald Esteban</h2>
        <p className="font-bold">
          An entry-level web developer who is experienced in building web
          application projects in Frontend Mentor with JavaScript, Tailwind,
          React, Next.js, and Supabase.
        </p>
        <div className="border-[#808080] border-b"></div>
      </div>
      <div className="flex flex-col gap-5">
        <p>
          I started learning on FreeCodeCamp and completed two certificates.
          After that, I moved to Frontend Mentor to apply what I learned,
          starting with easy challenges and progressing to guru-level
          challenges. I also took a few projects on Udemy and created other side
          projects.
        </p>
        <p>
          As a web developer, I focus on modern tech tools such as JavaScript,
          React, Next.js, and modern development workflows to build efficient
          and responsive web applications.
        </p>
        <div className="border-[#808080] border-b"></div>
      </div>
      {/* Social Links */}
      <div className="flex flex-col gap-5">
        <SocialLinks />
        <div className="border-white border-b-10"></div>
      </div>
    </div>
  );
}
export default About;
