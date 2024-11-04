import React from "react";
import styles from "./page.module.css";
import Header from "./components/navbar/Header";
import HomePage from "./components/home/HomePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <Header />
      </nav>
      <main>
        <HomePage />
      </main>
    </div>
  );
}
