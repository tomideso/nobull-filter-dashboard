import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Container from "components/Filter/Container.js";

export default function Home() {
  useEffect(() => {
    Router.push("/");
  }, []);

  return (
    <div className="container">
      <Head>
        <title>NoBull Filter</title>
      </Head>

      <main>{/* <Container sites={sites} /> */}</main>
    </div>
  );
}
