import * as React from "react";
import { Checkbox } from "@material-ui/core";

interface Props {
  status: boolean;
}

const TaskStatusToggler: React.FC<Props> = (props) => {
  return (
    <>
      <Checkbox checked={props.status} />
    </>
  );
};

export default TaskStatusToggler;
