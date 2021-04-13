import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Container from "components/Filter/Container.js";
import { BASE_URL } from "@/constant/constant";

export default function Home({ sites }) {
  useEffect(() => {
    // Router.push('/login')
  }, []);

  return (
    <div className="container">
      <Head>
        <title>NoBull Filter</title>
      </Head>

      <main>
        <Container sites={sites} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${BASE_URL}/v1/webflow/sites`);
  const sites = await res.json();

  //  if (!sites) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }
  // Pass post data to the page via props

  return { props: { sites } };
}
