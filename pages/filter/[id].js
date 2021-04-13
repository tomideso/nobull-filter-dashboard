import Head from "next/head";
import SiteContainer from "components/Sites/SiteContainer.js";
import { useRouter } from "next/router";
import { BASE_URL } from "@/constant/constant";

export default function Home({ filterConfigs }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <Head>
        <title>NoBull Filter</title>
      </Head>

      <main>
        <SiteContainer filterConfigs={filterConfigs} id={id} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(BASE_URL);
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
