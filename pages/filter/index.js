import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Container from "components/Filter/Container.js";

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
  const res = await fetch(`http://localhost:8000/v1/webflow/sites`);
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
