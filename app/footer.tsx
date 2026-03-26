import SocialLinks from "@/app/_components/SocialLinks";

function Footer() {
  return (
    <footer className="flex flex-col gap-2.5 text-center text-sm text-gray-500 border-t border-[#808080] py-5">
      <div className="flex justify-center max-lg:px-5">
        <SocialLinks />
      </div>
      <span className="font-semibold">© 2026 Gerald Esteban</span>
    </footer>
  );
}

export default Footer;
