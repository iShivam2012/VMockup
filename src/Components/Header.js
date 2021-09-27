import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/mails">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/stats">
            Stats
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
