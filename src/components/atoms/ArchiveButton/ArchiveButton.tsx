import * as React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";

const Button = styled(IconButton)`
  padding: 9px;
`;

const ArchiveButton: React.FC = () => {
  return (
    <Button aria-label="delete">
      <DeleteOutlineIcon />
    </Button>
  );
};

export default ArchiveButton;
