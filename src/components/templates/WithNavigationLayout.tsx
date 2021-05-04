import React from "react";
import Head from "next/head";
import Navigation from "../organisms/Navigation/Navigation";

interface Props {
  pageTitle: string;
}

const WithNavigationLayout: React.FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <meta name="description" content="this is my test page." />
        <link rel="icon" href="../../../public/favicon.ico" />
        <title>{props.pageTitle}</title>
      </Head>
      <Navigation title="Todo List">{props.children}</Navigation>
    </div>
  );
};

export default WithNavigationLayout;
