import React, { useEffect } from "react";
import OTP from "components/Auth/Confirmation/OTP";
import { connect } from "react-redux";
import Router from "next/router";

function email({ regData }) {
  const { email } = regData;
  useEffect(() => {
    if (!email) {
      Router.push("/register");
    }

    console.log(regData, email);
  }, [email]);

  return email ? <OTP /> : null;
}

export default connect((state) => state.reg)(email);
