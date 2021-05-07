import * as React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const Field = styled(TextField)`
  margin-left: 0;
`;

interface Props {
  onSubmit: (e: any) => void;
}

const TaskRegisterForm: React.FC<Props> = (props) => {
  return (
    <form noValidate autoComplete="off" onSubmit={props.onSubmit}>
      <Field label="Todo" fullWidth autoFocus />
    </form>
  );
};

export default TaskRegisterForm;
