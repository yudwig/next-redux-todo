import * as React from "react";
import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import WithNavigationLayout from "../../components/templates/WithNavigationLayout";
import selectors from "../../states/tasks/selectors";
import ArchivedTaskList from "../../components/organisms/ArchivedTaskList/ArchivedTaskList";

const Archived: React.FC = () => {
  const tasks = useSelector(selectors.getArchivedTasks) || [];

  return (
    <WithNavigationLayout pageTitle="Archived Task List">
      <Box mb={4} mt={8}>
        <Container maxWidth="md">
          <ArchivedTaskList tasks={tasks} />
        </Container>
      </Box>
    </WithNavigationLayout>
  );
};

export default Archived;
