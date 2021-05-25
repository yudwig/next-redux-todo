import * as React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  status: boolean;
  disabled: boolean;
}

const Button = styled(IconButton)`
  padding: 0;
  margin-left: 9px;
`;

const StatusIndicator: React.FC<Props> = (props) => {
  return (
    <Button
      disableRipple={props.disabled}
      disableFocusRipple={props.disabled}
      disabled={props.disabled}
    >
      <Checkbox checked={props.status} disabled={props.disabled} />
    </Button>
  );
};

export default StatusIndicator;
