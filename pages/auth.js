import Head from "next/head";

import { useSession, signIn, signOut } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import withSpinner from "@/hoc/withSpinner";
import { BASE_URL } from "@/constant/constant";

const Auth = ({ setShowSpinner }) => {
  const router = useRouter();

  useEffect(() => {
    getAuthUser();
  }, []);

  const getAuthUser = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");

    setShowSpinner(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/authorize`, {
        method: "POST",
        // mode: "no-cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const { fullName, profile, email } = await response.json();
      signIn("filter", {
        email,
        fullName,
        ...profile,
        // redirect: false,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Auth</title>
      </Head>

      {/* <main>
        <Main />
      </main> */}
    </div>
  );
};

export default withSpinner(Auth);
