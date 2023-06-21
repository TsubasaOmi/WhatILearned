/*
   if you want to adjust the offset of the part that is jumped from
   the NavigationBox,
   * use ContentContainer.scss
 */

import styles from "./NavigationBox.module.scss";

const NavigationBox = () => {
  return (
    <nav className={styles["navigation-box"]}>
      <ul className={styles["navigation-menu"]}>
        <li>
          <a href="#section1">Home</a>
        </li>
        <li>
          <a href="#section2">About</a>
        </li>
        <li>
          <a href="#section3">Services</a>
        </li>
        <li>
          <a href="#section4">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBox;
