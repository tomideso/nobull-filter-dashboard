import React from "react";

const defaultProps = [
  {
    day: "Monday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Tuesday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Wednesday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Thurday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Friday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Saturday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Sunday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
  {
    day: "Public Holiday",
    open: "Open",
    starttime: "07:00 am",
    endtime: "07:00 pm",
    allday: true,
  },
];

const OpeningHours = ({ openingHours = defaultProps }) => {
  return (
    <div>
      <div className="uk-text-bold uk-margin-top">Opening Hours</div>

      <table
        className={`
                    uk-table uk-text-center 
                    uk-text-small tm-table-stripe
                    uk-table-responsive
                    uk-table-small uk-table-divider
                `}>
        <thead>
          <tr className="uk-background-muted">
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Day
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Open
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Opening Time
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Closing Time
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              24 Hours
            </th>
          </tr>
        </thead>
        <tbody>
          {openingHours.map((val, i) => (
            <tr key={i}>
              <td className="uk-text-primary">{val.day}</td>
              <td>{val.open}</td>
              <td>{val.starttime}</td>
              <td>{val.endtime}</td>
              <td>
                <label>
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    checked={val.allday}
                    readOnly={true}
                    style={{ pointerEvents: "none" }}
                  />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
