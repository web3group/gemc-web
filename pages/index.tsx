import FrontPage from "@/components/front-page";
import getConfig from "next/config";
import { useEffect, useState } from "react";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return <FrontPage />;
};

export default Home;
