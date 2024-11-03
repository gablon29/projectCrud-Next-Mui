import React from "react";
import { Button } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </main>
    </div>
  );
}
