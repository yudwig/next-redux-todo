import * as React from "react";
import styled from "styled-components";
import { TextField, TextFieldProps } from "@material-ui/core";

const Field = styled(TextField)`
  margin-left: 0;
`;

const TextInput: React.FC<TextFieldProps> = (props) => {
  return <Field {...props} fullWidth />;
};

export default TextInput;
