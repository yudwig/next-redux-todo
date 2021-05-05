import * as React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  status: boolean;
}

const Button = styled(IconButton)`
  padding: 0;
  margin-left: 9px;
`;

const TaskStatusIndicator: React.FC<Props> = (props) => {
  return (
    <Button>
      <Checkbox checked={props.status} />
    </Button>
  );
};

export default TaskStatusIndicator;
