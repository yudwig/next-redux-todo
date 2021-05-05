import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import { Box } from "@material-ui/core";
import WithNavigationLayout from "../components/templates/WithNavigationLayout";
import TaskRegisterForm from "../components/atoms/TaskRegisterForm/TaskRegisterForm";
import TaskList from "../components/organisms/TaskList/TaskList";

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
    <WithNavigationLayout pageTitle="Todo List">
      <Box pb={2}>
        <TaskRegisterForm />
      </Box>
      <TaskList />
    </WithNavigationLayout>
  );
};

export default Index;
