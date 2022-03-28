import React from "react";
import Link from "next/link";

export default function SideBar({ hide = false }) {
  return (
    <>
      <style jsx>{`
        .tm-sidebar-left {
          position: fixed;
          top: 0;
          bottom: 0;
          box-sizing: border-box;
          width: 240px !important;
          padding: 120px 40px 60px 40px;
          border-right: 1px #e5e5e5 solid;
          overflow: auto;
          z-index: 10;
          height: 100%;
        }

        .tm-sidebar-left ul li a:hover:not(#menu) {
          background-color: #1e87f0;
          padding-left: 5px;
          color: #fff;
          font-weight: 600;
        }
      `}</style>
      <div className="tm-sidebar-left uk-visible@m uk-background-muted">
        <ul className="uk-nav uk-nav-default tm-nav">
          {/* <li className="uk-nav-header">Patients</li> */}
          <li className="uk-active">
            <a href="#">Patients</a>
          </li>
          <li className="uk-active">
            <a href="#">Appointments</a>
          </li>
          <li className="uk-active">
            <a href="#">Waiting Room</a>
          </li>
        </ul>
        <ul className="uk-nav uk-nav-default tm-nav">
          {/* <li className="uk-nav-header">Billing</li> */}
          <li className="uk-active">
            <a href="#">Billing</a>
          </li>
          <li className="uk-active">
            <Link href="/settings">
              <a>Setting</a>
            </Link>
          </li>
          <li className="uk-active">
            <a href="#">Messaging</a>
          </li>
          <li className="router-link-exact-active uk-active">
            <a href="#">Monitoring</a>
          </li>
          <li className="uk-active">
            <a href="#">
              <i
                className="uk-margin-small-right uk-icon"
                uk-icon="icon: sign-out"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
