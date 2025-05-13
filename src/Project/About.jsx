import React from "react";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutSection}>
        <h1>About Knowledge Haven</h1>
        <p>
          Welcome to <strong>Knowledge Haven</strong> – your ultimate destination for discovering books that enlighten, entertain, and educate. We are dedicated to providing an extensive range of books at affordable prices, fostering a love for reading and learning in everyone.
        </p>
        {/* <p>
          Our mission is to make books accessible to all, no matter your interests or budget. From timeless classics to contemporary bestsellers, we offer a diverse collection to suit every reader's taste.
        </p> */}
      </section>

      <section className={styles.featuresSection}>
        <h2>Why Choose Us?</h2>
        <ul className={styles.featuresList}>
          <li>
            📚 <strong>Affordable Prices:</strong> Enjoy a wide selection of books priced for every budget.
          </li>
          <li>
            🌟 <strong>Diverse Collection:</strong> Explore genres ranging from fiction to self-help, academic, and beyond.
          </li>
          <li>
            🚚 <strong>Convenient Access:</strong> Browse and purchase books from the comfort of your home.
          </li>
          <li>
            💡 <strong>Hidden Gems:</strong> Discover unique and lesser-known books that spark curiosity and inspiration.
          </li>
        </ul>
      </section>

      <section className={styles.visionSection}>
        <h2>Our Vision</h2>
        <p>
          To become the most trusted and beloved destination for readers worldwide, empowering individuals with knowledge and stories that transform lives.
        </p>
      </section>

      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
        Our mission is to make books accessible to all, no matter your interests or budget. From timeless classics to contemporary bestsellers, we offer a diverse collection to suit every reader's taste.
        </p>
      </section>

      <section className={styles.goalSection}>
        <h2>Our Goal</h2>
        <p>
          At Knowledge Haven, our goal is to make reading a habit for everyone. By providing quality books at unbeatable prices, we aim to create a community of lifelong learners and passionate readers.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
