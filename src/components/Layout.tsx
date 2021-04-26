import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout: React.FC = ({children}) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="this is my test page."
        />
        <link rel="icon" href="favicon.ico" />
        <title>layout</title>
      </Head>
      <header>
        <Navbar title="Todo List" />
      </header>
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;
