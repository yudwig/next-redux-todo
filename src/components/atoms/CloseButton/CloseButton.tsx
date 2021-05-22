import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { IconButton, IconButtonProps } from "@material-ui/core";

const Button = styled(IconButton)`
  padding: 9px;
`;

const CloseButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button aria-label="close" {...props}>
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
