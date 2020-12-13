import NavBar from "../Nav/NavBar";
// import SideBar from "components/Nav/SideBar";
import { LINKS } from "utility/sitemap";
import { useState, useEffect } from "react";
import SiteList from "components/Sites/SiteList";

const toExclude = [
  LINKS.SIGNUP,
  LINKS.LOGIN,
  "hospital/preview",
  "/doctor",
  "/confirmation/email",
  "/",
].join("|");

const Layout = ({ children, pathname }) => {
  const [hideSideBar, setHideSideBar] = useState(false);

  const layoutWidth = hideSideBar ? "0" : "240px";

  useEffect(() => {
    const hideSideBar = new RegExp(`(${toExclude})$`, "i").test(pathname);
    setHideSideBar(hideSideBar);
  }, [pathname]);

  return (
    <>
      <style jsx>{`
        .pt-60 {
        }
        @media (min-width: 960px) {
          .push_layout {
            margin-left: ${layoutWidth};
          }
        }
      `}</style>
      <div
        className="uk-position-relative  tm-background-black"
        uk-height-viewport="expand: false">
        <NavBar />
        {/* {!hideSideBar && <SideBar />} */}
        <section className="uk-container-expand pt-60 uk-height-1-1">
          {children}
        </section>
      </div>
    </>
  );
};

export default Layout;
