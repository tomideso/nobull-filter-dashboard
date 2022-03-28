const Header = ({ clickHandler }) => {
  return (
    <li className="uk-padding-small">
      <div>
        <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
          Filter elements
        </strong>

        <span className=" uk-text-bold  uk-button tm-text-primary uk-button-small uk-button-link">
          <span
            onClick={clickHandler}
            uk-toggle="#logic-offcanvas-usage"
            className="uk-icon"
            uk-icon="icon: plus; ratio: .9"></span>
          <span> Add</span>
        </span>
      </div>
    </li>
  );
};

export default Header;
