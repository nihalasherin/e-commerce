import React from "react";
import { Outlet } from "react-router-dom";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header1 />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
