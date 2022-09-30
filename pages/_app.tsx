import type { AppProps } from "next/app";

import "@/styles/global.css";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 2000);
  }, []);
  return isLoading ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
