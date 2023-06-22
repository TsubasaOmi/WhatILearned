import TestHeader from "../assets/images/TestHeader.jpeg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <img src={TestHeader} className={styles.header}></img>
      <p>
        <u>これより上はヘッダーです</u>
      </p>
    </div>
  );
};

export default Header;
