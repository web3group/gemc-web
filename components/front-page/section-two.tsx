import Image from "next/image";
import React from "react";

export default function SectionTwo() {
  return (
    <div className="section_two flex flex-col items-center justify-center">
      <div className="mb-4">
        <img className="s2_img" alt="Loading..." src="/images/front_s2.png" height={334} width={334} />
      </div>
      <div className="px-50">
        <p className="s2_text">
          Memberships connecting creative minds and NFT. <br /> A space for
          curious, kind people to elevate and collect
        </p>
      </div>

      <div className="s2_openSea rounded-full flex justify-center items-center">
        <p className="s2_openSea_text text-white text-center font-bold">OpenSea</p>
      </div>
    </div>
  );
}
