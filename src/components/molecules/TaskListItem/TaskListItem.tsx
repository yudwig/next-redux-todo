import * as React from "react";
import { Box, FormControlLabel, ListItem } from "@material-ui/core";
import styled from "styled-components";
import StatusIndicator from "../../atoms/StatusIndicator/StatusIndicator";
import ArchivedStateButton from "../../atoms/ArchivedStateButton/ArchivedStateButton";
import ToggleInput from "../../atoms/ToggleInput/ToggleInput";

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Label = styled(FormControlLabel)`
  width: 100%;
  span.MuiTypography-root {
    width: 100%;
  }
`;

const Item: any = styled(ListItem)`
  padding-left: 0;
  padding-right: 0;
`;

interface Props {
  title: string;
  completed: boolean;
  disabled: boolean;
  buttonType: "archive" | "unarchive";
  onClickStatus?: () => void;
  onClickButton?: () => void;
  onEnterTitle?: (title: string) => void;
}

const TaskListItem: React.FC<Props> = (props) => {
  return (
    <Item>
      <Flex justifyContent="space-between" width="100%">
        <Label
          control={
            <Box onClick={props.onClickStatus || (() => null)}>
              <StatusIndicator
                status={props.completed}
                disabled={props.disabled}
              />
            </Box>
          }
          label={
            <Box onClick={(e: any) => e.preventDefault()}>
              {props.disabled ? (
                <span>{props.title}</span>
              ) : (
                <ToggleInput
                  title={props.title}
                  onEnter={props.onEnterTitle || ((title: string) => null)}
                />
              )}
            </Box>
          }
        />
        <Flex onClick={props.onClickButton || (() => null)}>
          <ArchivedStateButton iconType={props.buttonType} />
        </Flex>
      </Flex>
    </Item>
  );
};

export default TaskListItem;
