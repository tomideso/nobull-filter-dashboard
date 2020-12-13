import React, { useEffect } from "react";
import Head from "next/head";
import Settings from "components/Settings/Settings";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const allowedRoutes = ["practice-profile", "subscription", "team"];

const Team = dynamic(() => import("components/Settings/Team/Team"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});

const Profile = dynamic(() => import("components/Settings/Profile/Profile"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});

const settings = () => {
  const router = useRouter();
  const { tab } = router.query;

  const isTeam = tab == allowedRoutes[2];
  const isSub = tab == allowedRoutes[1];
  const isProfile = tab == allowedRoutes[0];

  const getDefaultTab = () => {
    if (isProfile) return 0;
    if (isSub) return 1;
    return 2;
  };

  return (
    <section>
      <Head>
        <title>Settings</title>
      </Head>

      <Settings value={getDefaultTab()}>
        <div id="tab-content" className="uk-margin">
          {!!isProfile && <Profile />}

          {!!isSub && <div>Lorem ipsum dolor sit amet consectetur adipisi</div>}

          {!!isTeam && <Team />}
        </div>
      </Settings>
    </section>
  );
};

export default settings;
