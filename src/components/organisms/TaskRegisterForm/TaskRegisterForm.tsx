import * as React from "react";
import { FormEvent, useRef, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../../atoms/TextInput/TextInput";
import * as taskOperations from "../../../states/tasks/operations";

const TaskRegisterForm: React.FC = (props) => {
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onKeyDown = (e: KeyboardEvent) => {
    if (!input || !input.current) {
      return;
    }
    if (e.key === "Escape") {
      input.current.value = "";
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !input.current) {
      return;
    }
    const val: string = input.current.value;
    if (!val) {
      return;
    }
    dispatch(taskOperations.create(val));
    input.current.value = "";
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextInput
        label="Todo"
        fullWidth
        autoFocus
        inputRef={input}
        onKeyDown={onKeyDown}
      />
    </form>
  );
};

export default TaskRegisterForm;
