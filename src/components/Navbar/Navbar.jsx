import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ user }) => {
  console.log(user);
  return (
    <nav className={styles.navbar}>
      <span
        className={styles.navbarToggle}
        onClick={() =>
          document.getElementById("js-menu").classList.toggle(styles.active)
        }
      >
        <i className="material-icons">menu</i>
      </span>
      <NavLink exact to="/" className={styles.logo}>
        MovieFlex
      </NavLink>
      <ul className={styles.mainNav} id="js-menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className={styles.search}>
        {!user ? (
          <NavLink
            to="/login"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            <i className="material-icons">
              <a href="#">login</a>
            </i>
          </NavLink>
        ) : (
          <i className="material-icons">
            <a href="#">logout</a>
          </i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
