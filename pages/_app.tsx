import type { AppProps } from "next/app";

import "@/styles/global.css";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
