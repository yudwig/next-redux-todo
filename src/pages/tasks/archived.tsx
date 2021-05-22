import * as React from "react";
import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import WithNavigationLayout from "../../components/templates/WithNavigationLayout";
import TaskList from "../../components/organisms/TaskList/TaskList";
import selectors from "../../states/tasks/selectors";

const Archived: React.FC = () => {
  const tasks = useSelector(selectors.getArchivedTasks) || [];

  return (
    <WithNavigationLayout pageTitle="Archived Task List">
      <Box mb={4} mt={8}>
        <Container maxWidth="md">
          <TaskList tasks={tasks} />
        </Container>
      </Box>
    </WithNavigationLayout>
  );
};

export default Archived;
