import * as React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const Field = styled(TextField)`
  padding-left: 0;
`;

const TaskRegisterForm: React.FC = () => {
  return <Field label="Todo" fullWidth />;
};

export default TaskRegisterForm;
