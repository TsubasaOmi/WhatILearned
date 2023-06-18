import React from "react";
import styles from "./NavigationBox.module.css";

const NavigationBox = () => {
  const handleLinkClick = () => {
    // Handle click event if needed
  };

  return (
    <div className={styles["navigation-box"]}>
      <ul className={styles["navigation-menu"]}>
        <li className={styles["navigation-menu__item"]}>
          <a
            href="#"
            className={styles["navigation-menu__link"]}
            onClick={handleLinkClick}
          >
            Home
          </a>
        </li>
        <li className={styles["navigation-menu__item"]}>
          <a
            href="#"
            className={styles["navigation-menu__link"]}
            onClick={handleLinkClick}
          >
            About
          </a>
        </li>
        <li className={styles["navigation-menu__item"]}>
          <a
            href="#"
            className={styles["navigation-menu__link"]}
            onClick={handleLinkClick}
          >
            Services
          </a>
        </li>
        <li className={styles["navigation-menu__item"]}>
          <a
            href="#"
            className={styles["navigation-menu__link"]}
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBox;
