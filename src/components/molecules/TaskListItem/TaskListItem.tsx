import * as React from "react";
import { Box, FormControlLabel, ListItem } from "@material-ui/core";
import styled from "styled-components";
import TaskStatusToggler from "../../atoms/TaskStatusToggler/TaskStatusToggler";
import TaskArchiveButton from "../../atoms/TaskArchiveButton/TaskArchiveButton";

const Text = styled.text`
  padding-left: 10px;
`;

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

interface Props {
  title: string;
  status: boolean;
}

const TaskListItem: React.FC<Props> = (props) => {
  return (
    <ListItem>
      <Flex justifyContent="space-between" width="100%">
        <FormControlLabel
          control={<TaskStatusToggler status={props.status} />}
          label={props.title}
        />
        <Flex>
          <TaskArchiveButton />
        </Flex>
      </Flex>
    </ListItem>
  );
};

export default TaskListItem;
