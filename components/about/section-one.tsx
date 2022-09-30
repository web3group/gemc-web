import Image from "next/image";
import React from "react";

export default function SectionOne() {
  return (
    <div className="about_first-section h-20">
      <p className="about_title text-base text-7xl text-center uppercase pt-28">
        who are we
      </p>

      <div className="about_body ml-44 mr-44 mt-14">
        <p className="about_content text-center text-xl">
          From 4 friends sharing the same vision and coming together to launch
          WoW, to now a team of 9 united in our mission to create a beautiful,
          diverse, empowering collection and thriving community.
        </p>
        <div className="h-10"></div>
        <p className="about_content text-center text-xl">
          We love welcoming people into the NFT space and creating a supportive
          environment for everyone – from new community members and collectors
          to emerging artists and NFT enthusiasts. We believe that together, the
          WoW community can have a positive impact on the NFT space and the
          world. We are excited to be on this journey with you all!
        </p>
      </div>

      <div className="flex justify-center align-center mt-20">
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
  );
}
