import React from "react";
import HeaderC from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-mgrey w-full">
      <HeaderC />

      {/* CONTENT */}
      <main className="flex-1 flex flex-col">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
