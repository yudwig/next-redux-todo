import Head from "next/head";
import { Button, TextField } from "@material-ui/core";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button variant="contained" color="primary">
          Test
        </Button>
        <TextField variant="outlined" color="primary" />
      </main>
    </div>
  );
}
