import * as React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { FormEvent, useRef, KeyboardEvent } from "react";

const Field = styled(TextField)`
  margin-left: 0;
`;

interface Props {
  onSubmit: (text: string) => void;
}

const TaskRegisterForm: React.FC<Props> = (props) => {
  const input = useRef<HTMLInputElement>(null);

  const keyDown = (e: KeyboardEvent) => {
    if (!input || !input.current) {
      return;
    }
    if (e.key === "Escape") {
      input.current.value = "";
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !input.current) {
      return;
    }
    const val: string = input.current.value;
    if (!val) {
      return;
    }
    props.onSubmit(val);
    input.current.value = "";
  };

  return (
    <form noValidate autoComplete="off" onSubmit={submit}>
      <Field
        label="Todo"
        fullWidth
        autoFocus
        inputRef={input}
        onKeyDown={keyDown}
      />
    </form>
  );
};

export default TaskRegisterForm;
