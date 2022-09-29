import getConfig from "next/config";

import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SectionOne from "@/components/front-page/section-one";
import SectionTwo from "@/components/front-page/section-two";
import SectionThree from "@/components/front-page/section-three";
import SectionFour from "@/components/front-page/section-four";
import SectionFive from "@/components/front-page/section-five";
import SectionSix from "@/components/front-page/section-six";
import SectionSeven from "@/components/front-page/section-seven";
import SectionEight from "@/components/front-page/section-eight";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </>
  );
};

export default Home;
