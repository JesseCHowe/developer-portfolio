import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.links}>
          <NavLink activeClassName={styles.isActive} exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName={styles.isActive} to="/about">
            About Me
          </NavLink>
        </div>
        <div></div>
      </div>
      <div>
        <h1>Jesse Howe</h1>
        <span>Front End Developer</span>
      </div>
    </header>
  );
};

export default Header;
