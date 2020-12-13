import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Container from "components/Filter/Container.js";

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
        <Container />
      </main>
    </div>
  );
}
