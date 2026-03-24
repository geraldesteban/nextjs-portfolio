import SocialLinks from "@/app/_components/SocialLinks";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-190 mx-auto gap-5 pt-28 pb-5 max-lg:px-5 max-lg:w-full max-md:pt-36"
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-5xl">Hi, I&apos;m Gerald Esteban</h2>
        <p className="text-base font-semibold">
          A web developer who is experienced in building web applications with
          JavaScript, Tailwind, React, Next.js, and Supabase.
        </p>
      </div>
      {/* Social Links */}
      <div className="flex flex-col gap-5">
        <SocialLinks />
        <div className="border-[#808080] border-b"></div>
      </div>
    </div>
  );
}
export default About;
