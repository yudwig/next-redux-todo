import React from "react";
import { Box, Container } from "@material-ui/core";
import WithNavigationLayout from "../components/templates/WithNavigationLayout";
import TaskRegisterForm from "../components/organisms/TaskRegisterForm/TaskRegisterForm";
import TaskList from "../components/organisms/TaskList/TaskList";

const Index: React.FC = () => {
  return (
    <WithNavigationLayout pageTitle="Todo List">
      <Container maxWidth="md">
        <Box mb={4} mt={8}>
          <TaskRegisterForm />
        </Box>
        <TaskList />
      </Container>
    </WithNavigationLayout>
  );
};

export default Index;
