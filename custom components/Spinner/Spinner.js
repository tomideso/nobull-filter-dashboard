import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
// import { css } from "@emotion/core";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

export const Spinner = () => {
  const element = (
    <div className="loader">
      <PuffLoader color={"#1e87f0"} loading={true} size={150} />

      <style jsx>{`
        .loader {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          /* background-color: #eee; */
          /* background-color: rgba(255, 255, 255, 0.7);     */
          background-color: rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }
      `}</style>
    </div>
  );
  return ReactDOM.createPortal(element, document.body);
};

export default dynamic(() => Promise.resolve(Spinner), {
  ssr: false,
});
