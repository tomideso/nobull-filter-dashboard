import LoginContainer from "components/Auth/Login/Container";
import Head from "next/head";
import { getSession } from "next-auth/client";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer />
    </>
  );
};

export async function getServerSideProps({ req }) {
  try {
    const session = await getSession({ req });
    console.log({ session });
    if (session) throw "Authenticated user";

    return { props: {} };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Login;
