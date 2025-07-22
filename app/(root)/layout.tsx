import StreamVideoProvider from "@/providers/StreamClientProvider";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamVideoProvider>
      <main>{children}</main>;
    </StreamVideoProvider>
  );
};

export default layout;
