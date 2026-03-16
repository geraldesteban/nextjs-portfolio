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
      <body className="min-h-screen flex flex-col bg-[#1a1a1a]">
        {/* Navigation Bar */}
        <Header />
        {/* Pages Content */}
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
