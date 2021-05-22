import NavLink from "./NavLink";
import * as styles from "../styles/Navbar.module.css";
import ThemeSwitch from "./ThemeSwitch";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isRel, setIsRel] = useState(false);

  return (
    <nav className={isRel ? styles.main + " " + styles.mainon : styles.main}>
      <div
        className={isRel
          ? styles.burger + " " + styles.burgeron
          : styles.burger}
        onClick={() => setIsRel(!isRel)}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <ul className={isRel ? styles.mainon : styles.list}>
        <ThemeSwitch />
      </ul>

      <img className={styles.logo} src="/favicon.ico" alt="logo"/>
    </nav>
  );
}
