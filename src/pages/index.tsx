import Head from "next/head";
import {
  Box,
} from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import TaskRegisterForm from "../components/TaskRegisterForm";
import TaskList from "../components/TaskList";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e6ffff",
      main: "#b3e5fc",
      dark: "#82b3c9",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Todo List</title>
      </Head>
      <main className={styles.main}>
        <Box>
          <Box pl={3} mb={3}>
            <TaskRegisterForm />
          </Box>
           <TaskList />
        </Box>
      </main>
    </Layout>
  );
}

export default Index;
