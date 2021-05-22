import React from "react";
import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import WithNavigationLayout from "../components/templates/WithNavigationLayout";
import TaskRegisterForm from "../components/organisms/TaskRegisterForm/TaskRegisterForm";
import TaskList from "../components/organisms/TaskList/TaskList";
import selectors from "../states/tasks/selectors";

const Index: React.FC = () => {
  const tasks = useSelector(selectors.getInboxTasks) || [];

  return (
    <WithNavigationLayout pageTitle="Todo List">
      <Container maxWidth="md">
        <Box mb={4} mt={8}>
          <TaskRegisterForm />
        </Box>
        <TaskList tasks={tasks} />
      </Container>
    </WithNavigationLayout>
  );
};

export default Index;
