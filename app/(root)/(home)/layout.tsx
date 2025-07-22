import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1 min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sxm:px-14">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
