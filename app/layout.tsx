import { ReactNode } from "react";

import "@/app/_styles/globals.css";

import Header from "@/app/_components/Header";
import Footer from "@/app/footer";

export const metadata = {
  title: {
    template: "%s",
    default: "Gerald Esteban - Web Developer",
  },
};

type RootLayoutProps = { children: ReactNode };

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Devicon CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-[#1a1a1a] w-full">
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
