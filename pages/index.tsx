import getConfig from "next/config";

import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/front-page");
  }, []);

  return <>Hello world</>;
};

export default Home;
