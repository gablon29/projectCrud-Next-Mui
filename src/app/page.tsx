import React from "react";
import { Button } from "@mui/material";
import styles from "./page.module.css";
import Header from "./components/navbar/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <Header />
      </nav>
    </div>
  );
}
