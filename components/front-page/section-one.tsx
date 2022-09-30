import Image from "next/image";
import React, { useEffect } from "react";

export default function SectionOne() {
  return (
    <div className="section_one flex justify-between p-10">
      <div className="section_one_left w-2/4">
        <div>
          <p className="s1_title">Grand</p>
          <p className="s1_title">Escape</p>
          <p className="s1_title">Members</p>
          <p className="s1_title">Club</p>
        </div>
        <div>
          <p className="s1_body_1 font-bold text-2xl mt-11">
            When Digital Art Meets NFT’s!
          </p>
          <p className="s1_body_2 text-2xl mt-6">
            GEMC is a private members collective of 10,000 dedicated NFT's
            Created by our Famous Artist, giving back and investing in new
            artists.
          </p>
          <p className="s1_body_2 text-2xl mt-6">
            We are building a community of private colectors, artists and
            promote art on the blockchain.
          </p>
        </div>
        <div className="s1_btn flex justify-center align-center mr-4 my-12">
          <button
            type="button"
            className="about_first_btn h-10 px-4 py-1 flex items-center text-white text-lg font-bold bg-black hover:bg-black-700 focus:outline-none focus:ring-4 rounded-full uppercase"
          >
            <Image src="/images/about_logomark.svg" height={33} width={33} />
            <span className="about_first_text pl-1 text-sm">mint soon</span>
          </button>
          <button
            type="button"
            className="about_first_btn h-10 ml-10 px-4 py-1 flex items-center text-white text-lg font-bold bg-black hover:bg-black-700 focus:outline-none focus:ring-4 rounded-full uppercase"
          >
            <Image src="/images/about_logomark.svg" height={33} width={33} />
            <span className="about_first_text pl-1 text-sm">join discord</span>
          </button>
        </div>
      </div>
      <div className="section_one_right pt-6">
        <Image
          loading="eager"
          alt="Loading..."
          src="/images/front_s1.svg"
          height={544}
          width={544}
        />
      </div>
    </div>
  );
}
