import Head from "next/head";
import SiteList from "components/Sites/SiteList.js";
import { BASE_URL } from "@/constant/constant";

export default function Home({ filterConfigs }) {
  return (
    <div className="container">
      <Head>
        <title>NoBull Filter</title>
      </Head>

      <main>
        {/* <Main /> */}
        <SiteList filterConfigs={filterConfigs} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${BASE_URL}/v1/config`);
  const filterConfigs = await res.json();

  //  if (!sites) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }
  // Pass post data to the page via props
  return { props: { filterConfigs } };
}
