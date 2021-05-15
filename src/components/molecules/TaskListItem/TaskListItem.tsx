import * as React from "react";
import { Box, FormControlLabel, ListItem } from "@material-ui/core";
import styled from "styled-components";
import StatusIndicator from "../../atoms/StatusIndicator/StatusIndicator";
import ArchiveButton from "../../atoms/ArchiveButton/ArchiveButton";

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
  id: string;
  title: string;
  isCompleted: boolean;
  onClickStatusIndicator: (id: string) => void;
  onClickArchiveButton: (id: string) => void;
}

const TaskListItem: React.FC<Props> = (props) => {
  return (
    <Item>
      <Flex justifyContent="space-between" width="100%">
        <FormControlLabel
          control={
            <Box onClick={() => props.onClickStatusIndicator(props.id)}>
              <StatusIndicator status={props.isCompleted} />
            </Box>
          }
          label={<Box>{props.title}</Box>}
        />
        <Flex onClick={() => props.onClickArchiveButton(props.id)}>
          <ArchiveButton />
        </Flex>
      </Flex>
    </Item>
  );
};

export default TaskListItem;
