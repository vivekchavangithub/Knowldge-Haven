import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} MyBookStore. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#facebook" aria-label="Facebook">Facebook</a>
          <a href="#twitter" aria-label="Twitter">Twitter</a>
          <a href="#instagram" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
