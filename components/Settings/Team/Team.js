import React from "react";
import Link from "next/link";
import SwitchButton from "custom components/SwitchButton/SwitchButton";

const Team = (props) => {
  return (
    <div>
      <table className="uk-table uk-text-center uk-text-small tm-table-stripe uk-table-responsive uk-table-small uk-table-divider">
        <thead>
          <tr className="uk-background-muted">
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Name
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Speciality
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Account Active
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Admin Control
            </th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="uk-table-link">
              <Link href="/">
                <a className="">Dr Dushyant Singh</a>
              </Link>
            </td>
            <td>Emergency Medicine</td>
            <td>
              <SwitchButton
                name="active"
                handleChange={null}
                defaultChecked={true}
              />
            </td>
            <td>
              <SwitchButton
                name="active"
                handleChange={null}
                defaultChecked={true}
              />
            </td>
            <td className="uk-table-link">
              <a
                href="#"
                className="uk-icon-link uk-button-link"
                uk-icon="trash"></a>
            </td>
          </tr>
          <tr>
            <td className="uk-table-link">
              <Link href="/">
                <a className="">Dr Dushyant Singh</a>
              </Link>
            </td>
            <td>Table Data</td>
            <td>
              <SwitchButton
                name="active"
                handleChange={null}
                defaultChecked={true}
              />
            </td>
            <td>
              <SwitchButton
                name="active"
                handleChange={null}
                defaultChecked={true}
              />
            </td>
            <td className="uk-table-link">
              <a
                href="#"
                className="uk-icon-link uk-button-link"
                uk-icon="trash"></a>
            </td>
          </tr>
          <tr>
            <td className="uk-table-link">
              <Link href="/">
                <a className="">Dr Dushyant Singh</a>
              </Link>
            </td>
            <td>Table Data</td>
            <td>
              <SwitchButton
                name="active"
                handleChange={null}
                defaultChecked={true}
              />
            </td>
            <td>
              <SwitchButton
                name="active"
                handleChange={null}
                defaultChecked={true}
              />
            </td>
            <td className="uk-table-link">
              <a
                href="#"
                className="uk-icon-link uk-button-link"
                uk-icon="trash"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="uk-link">
        <span uk-icon="icon: plus-circle;"></span> Add User
      </p>
    </div>
  );
};

export default Team;
