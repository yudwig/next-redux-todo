import * as React from "react";
import { Box, FormControlLabel, ListItem } from "@material-ui/core";
import styled from "styled-components";
import TaskStatusIndicator from "../../atoms/TaskStatusIndicator/TaskStatusIndicator";
import TaskArchiveButton from "../../atoms/TaskArchiveButton/TaskArchiveButton";

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Item: any = styled(ListItem)`
  padding-left: 0;
  padding-right: 0;
`;

interface Props {
  title: string;
  status: boolean;
}

const TaskListItem: React.FC<Props> = (props) => {
  return (
    <Item>
      <Flex justifyContent="space-between" width="100%">
        <FormControlLabel
          control={<TaskStatusIndicator status={props.status} />}
          label={props.title}
        />
        <Flex>
          <TaskArchiveButton />
        </Flex>
      </Flex>
    </Item>
  );
};

export default TaskListItem;
