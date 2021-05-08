import * as React from "react";
import { FormEvent, useRef, KeyboardEvent } from "react";
import TextInput from "../../atoms/TextInput/TextInput";

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
      <TextInput
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
