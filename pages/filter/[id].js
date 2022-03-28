import Head from "next/head";
import SiteContainer from "components/Sites/SiteContainer.js";
import { useRouter } from "next/router";
import { BASE_URL } from "@/constant/constant";
import axios from "axios";

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

export async function getServerSideProps({ req }) {
  try {
    const res = await axios.get(`${BASE_URL}/config`, {
      withCredentials: true,
      headers: {
        Cookie: req.headers?.cookie,
      },
    });

    const filterConfigs = res.data;

    return { props: { filterConfigs } };
  } catch (error) {
    console.log("error", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // return { props: { data } };

  // Pass post data to the page via props
}
