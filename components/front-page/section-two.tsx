import Image from "next/image";
import React from "react";

export default function SectionTwo() {
  return (
    <div className="section_two flex flex-col items-center justify-center">
      <div>
        <Image src="/images/front_s2.svg" height={334} width={334} />
      </div>
      <div className="px-60">
        <p className="s2_text">
          Memberships connecting creative minds and NFT. <br /> A space for
          curious, kind people to elevate and colect
        </p>
      </div>

      <div className="s2_openSea rounded-full flex justify-center items-center">
        <p className="s2_openSea_text text-white text-center font-bold">OpenSea</p>
      </div>
    </div>
  );
}
