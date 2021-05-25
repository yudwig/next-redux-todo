import * as React from "react";
import { Box } from "@material-ui/core";
import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import TextInput from "../TextInput/TextInput";

interface Props {
  title: string;
  onEnter: (title: string) => void;
}

const ToggleInput: React.FC<Props> = (props) => {
  const [isUpdateMode, setUpdateMode] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const enter = () => {
    if (!input || !input.current || input.current.value === props.title) {
      return;
    }
    props.onEnter(
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

  const changeToUpdateMode = (e: any) => {
    setUpdateMode(true);
    // e.preventDefault();
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

  return <>{isUpdateMode ? titleInput : titleDisplay}</>;
};

export default ToggleInput;
