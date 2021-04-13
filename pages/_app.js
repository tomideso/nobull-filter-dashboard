import Head from "next/head";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import { ReduxWrapper } from "../redux/store";

let Icons;

if (process.browser || typeof window !== "undefined") {
  import("uikit/dist/js/uikit-icons").then((module) => {
    Icons = module.default;
  });
}

import { QueryClient, QueryClientProvider } from "react-query";

const MyApp = ({ Component, pageProps, store }) => {
  const router = useRouter();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout pathname={router.pathname}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/Image/Logo.svg" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="stylesheet" href="/styles/style.css" />
          <link rel="stylesheet" href="/styles/uikit.min-3.5.9.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Component {...pageProps} />

        <script src="/javascript/uikit.min-3.5.9.js"></script>
      </Layout>
    </QueryClientProvider>
  );
};

//withRedux wrapper that passes the store to the App Component
export default ReduxWrapper.withRedux(MyApp);
