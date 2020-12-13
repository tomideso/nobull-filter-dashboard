import React from "react";
import ContactDetails from "./ContactDetails";
import Profile from "./Profile";
import AppointmentCalendar from "./AppointmentCalendar";

const LeftColumn = () => {
  return (
    <div>
      <Profile />
      <AppointmentCalendar />
      <ContactDetails />
    </div>
  );
};

export default LeftColumn;
