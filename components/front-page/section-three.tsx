import Image from "next/image";
import React, { useEffect } from "react";

export default function SectionThree() {
  return (
    <div className="section_three flex justify-between items-center px-20 py-28">
      <div className="s3_left w-2/4 mr-6">
        <p className="s3_left_title my-10">Mission and Vision</p>
        <p className="s3_left_content leading-9">
          GEMC’s vision is to build an inclusive web3 through its collection and
          community. According to research published in Nov. 2021, female
          artists accounted for just 5% of all NFT art sales in the prior 21
          months. GEMC is on a mission to change this. Together, we can create
          opportunities for anyone around the world to be owners, creators and
          contributors in this new era of the web.
        </p>
        <div className="h-11"></div>
        <p className="s3_left_content">We believe in giving back from Day 1.</p>

        <div className="h-11"></div>
        <p className="s3_left_content leading-9">
          With the GEMC community, we’re taking action to increase diversity in
          the NFT space, educate and onboard the next generation of creators and
          builders, and create equal opportunities for everyone. Now it starts.
        </p>
      </div>
      <div className="s3_right">
        <Image
          loading="eager"
          alt="Loading..."
          src="/images/front_s3.svg"
          height={555}
          width={526}
        />
      </div>
    </div>
  );
}
