import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Settings from "components/Settings/Settings";
// import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/settings/practice-profile");
  }, []);

  return (
    <section>
      <Head>
        <title>Settings</title>
      </Head>
    </section>
  );
};

export default index;
