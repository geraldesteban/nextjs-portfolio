import { ReactNode } from "react";

import "@/app/_styles/globals.css";

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
      <body className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
