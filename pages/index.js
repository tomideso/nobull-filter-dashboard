import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
// import Main from "components/Home/Main.js";
import SiteList from "components/Sites/SiteList.js";

export default function Home() {
  useEffect(() => {
    // Router.push('/login')
  }, []);

  return (
    <div className="container">
      <Head>
        <title>NoBull Filter</title>
      </Head>

      <main>
        {/* <Main /> */}
        <SiteList />
      </main>
    </div>
  );
}
