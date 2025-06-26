import React from "react";
import styles from "./Social.module.css";

const Social: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.socialList}>
        <li>
          <a href="#" className={`${styles.socialLink} ${styles.facebook}`}>
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className={`${styles.socialLink} ${styles.instagram}`}>
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className={`${styles.socialLink} ${styles.google}`}>
            <i className="fab fa-google"></i>
            <span>Google</span>
          </a>
        </li>
        <li>
          <a href="#" className={`${styles.socialLink} ${styles.twitter}`}>
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
