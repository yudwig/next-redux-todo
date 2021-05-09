import * as React from "react";
import { FormEvent, useRef, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../../atoms/TextInput/TextInput";
import { addTask } from "../../../states/tasks/actions";

const TaskRegisterForm: React.FC = (props) => {
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

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
    dispatch(addTask(val));
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
