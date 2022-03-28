import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import withSpinner from "@/hoc/withSpinner";
import { BASE_URL } from "@/constant/constant";

const Logout = ({ setShowSpinner }) => {
  useEffect(() => {
    signOutUser();
    // Router.push("/login");
  }, []);

  const signOutUser = async () => {
    setShowSpinner(true);

    try {
      await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        // mode: "no-cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      await signOut({ redirect: false });
      signOut({ callbackUrl: `/login` });
      Router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Logout</title>
      </Head>
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  res.setHeader("set-cookie", []);
  return { props: {} };
}

export default withSpinner(Logout);
