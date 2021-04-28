import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  title: string;
}

const SiteLogo: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
    </>
  );
};

export default SiteLogo;
