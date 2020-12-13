import Head from "next/head";
import RegisterGrid from "../components/Auth/Register/Grid";
import { ReduxWrapper } from "../redux/store";
import { getCookie } from "../redux/cookie-helper";
import Router from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setRegRedirectPath, resetReg } from "../redux/actions/reg";

const Register = ({ regRedirectPath, dispatch, ...props }) => {
  useEffect(() => {
    if (regRedirectPath) {
      console.log("regRedirectpath", regRedirectPath);
      Router.push(regRedirectPath);
    }
    return () => {
      // clean regRedirectPath path
      dispatch(setRegRedirectPath(null));
      dispatch(resetReg());
    };
  }, [regRedirectPath]);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterGrid />
    </>
  );
};

export default connect((state) => state.reg)(Register);

export const getServerSideProps = ReduxWrapper.getServerSideProps(
  async ({ store, req, res, ...etc }) => {
    // regular stuff
    console.log("store state", store.getState());
    if (req.headers.cookie) {
      const token = getCookie("reg_message", req);
      console.log("WHOAMI ", token);
    }
  }
);
