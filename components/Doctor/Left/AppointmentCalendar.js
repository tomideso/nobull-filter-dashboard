import React from "react";

const AppointmentCalendar = () => {
  return (
    <>
      <div className="tm-outline-muted Calendar uk-margin">
        <div className="tm-text-white uk-background-primary tm-padding-small">
          BOOK APPOINTMENT
        </div>
        <div className="uk-grid-small uk-padding-small" uk-grid="">
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .Calendar {
          height: 250px;
        }
      `}</style>
    </>
  );
};

export default AppointmentCalendar;
