import React from "react";
import Spinner from "@/custom components/Spinner/Spinner";

const withSpinner = (Component) => (props) => {
  const [showSpinner, setShowSpinner] = React.useState(false);

  return (
    <React.Fragment>
      <Component {...props} setShowSpinner={setShowSpinner} />
      {showSpinner && <Spinner />}
    </React.Fragment>
  );
};

export default withSpinner;
