import * as React from "react";
import { Box, FormControlLabel, ListItem } from "@material-ui/core";
import styled from "styled-components";
import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import StatusIndicator from "../../atoms/StatusIndicator/StatusIndicator";
import ArchiveButton from "../../atoms/ArchiveButton/ArchiveButton";
import TextInput from "../../atoms/TextInput/TextInput";

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
  id: string;
  title: string;
  isCompleted: boolean;
  onClickStatusIndicator: (id: string) => void;
  onClickArchiveButton: (id: string) => void;
  onEnterTitle: (id: string, title: string) => void;
}

const TaskListItem: React.FC<Props> = (props) => {
  const [isUpdateMode, setUpdateMode] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const enter = () => {
    if (!input || !input.current || input.current.value === props.title) {
      return;
    }
    props.onEnterTitle(
      props.id,
      input && input.current && input.current.value ? input.current.value : ""
    );
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (!input || !input.current) {
        return;
      }
      input.current.value = props.title;
      setUpdateMode(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enter();
    setUpdateMode(false);
  };

  const onBlur = (e: any) => {
    enter();
    setUpdateMode(false);
  };

  const changeToUpdateMode = () => {
    setUpdateMode(true);
    setTimeout(() => {
      if (!input || !input.current) {
        return;
      }
      input.current.focus();
    }, 1);
  };

  const titleDisplay = <Box onClick={changeToUpdateMode}>{props.title}</Box>;
  const titleInput = (
    <Box>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextInput
          fullWidth
          inputRef={input}
          defaultValue={props.title}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </form>
    </Box>
  );

  return (
    <Item>
      <Flex justifyContent="space-between" width="100%">
        <Label
          control={
            <Box onClick={() => props.onClickStatusIndicator(props.id)}>
              <StatusIndicator status={props.isCompleted} />
            </Box>
          }
          label={isUpdateMode ? titleInput : titleDisplay}
        />
        <Flex onClick={() => props.onClickArchiveButton(props.id)}>
          <ArchiveButton />
        </Flex>
      </Flex>
    </Item>
  );
};

export default TaskListItem;
