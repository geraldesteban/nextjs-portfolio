import { ReactNode } from "react";

import "@/app/_styles/globals.css";
import Providers from "./provider";

export const metadata = {
  title: {
    template: "%s",
    default: "Gerald Esteban - Web Developer",
  },
};

type RootLayoutProps = { children: ReactNode };

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Devicon CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-[#1a1a1a] dark:bg-white w-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
