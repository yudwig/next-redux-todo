import * as React from "react";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";

interface Props {
  title: string;
}

const SiteLogo: React.FC<Props> = ({ title }) => {
  return (
    <Link href="/" passHref>
      <MuiLink color="inherit" variant="h6" underline="none">
        {title}
      </MuiLink>
    </Link>
  );
};

export default SiteLogo;
