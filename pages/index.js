import Head from "next/head";
import SiteList from "components/Sites/SiteList.js";
import { BASE_URL } from "@/constant/constant";
import { getSession } from "next-auth/client";

export default function Home({ filterConfigs }) {
  // useEffect(async () => {
  //   const res = await fetch(`${BASE_URL}/config`, {
  //     credentials: "include",
  //     mode: "cors",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const filterConfigs = await res.json();
  //   console.log(filterConfigs);
  //   setstate(filterConfigs);
  // }, []);

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

export async function getServerSideProps({ req }) {
  try {
    const session = await getSession({ req });
    if (!session) throw "unAuthenticated user";

    const res = await fetch(`${BASE_URL}/config`, {
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: req.headers.cookie,
      },
    });
    const filterConfigs = await res.json();

    return { props: { filterConfigs } };
  } catch (error) {
    return {
      // redirect to signout
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
