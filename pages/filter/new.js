import Head from "next/head";
import { useEffect } from "react";
import Container from "components/Filter/Container.js";
import { BASE_URL } from "@/constant/constant";
import axios from "axios";

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

export async function getServerSideProps({ req }) {
  try {
    const res = await axios.get(`${BASE_URL}/webflow/sites`, {
      withCredentials: true,
      headers: {
        Cookie: req.headers?.cookie,
      },
    });

    const sites = res.data;

    return { props: { sites } };
  } catch (error) {
    console.log("error", error);
    return {
      redirect: {
        destination: "/logout",
        permanent: false,
      },
    };
  }

  //  if (!sites) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }
}
