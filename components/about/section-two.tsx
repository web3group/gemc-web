import Image from "next/image";
import React from "react";

export default function SectionTwo() {
  return (
    <div className="about_second_section px-10">
      <div className="ml-12 mt-16 mb-9">
        <span className="about_second_title text-left text-bold text-5xl capitalize">
          The team
        </span>
      </div>
      <div className="flex items-center mb-20">
        <Image
          className="rounded-full"
          src="/images/about_s_1.svg"
          height={252}
          width={252}
        />
        <div className="ml-6 w-3/4">
          <p className="text-3xl about_second_sub_title">Snow Queen</p>
          <span className="text-3xl about_second_content">
            Crypto night vision since 2014. <br /> Worked with Deloitte, Ernst &
            Young and fast growing Tech companies <br /> love art and want to
            enable artist globally to get exposure.
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-20">
          <Image
            className="rounded-full"
            src="/images/about_s_2.svg"
            height={252}
            width={252}
          />

          <div className="ml-6 w-3/4">
            <p className="text-3xl about_second_sub_title">The Apple Guy</p>
            <span className="text-3xl about_second_content">
              Worked with Crypto since 2013, founded tech companies and having a
              big vision for the future of NFT.
            </span>
          </div>
        </div>

        <div className="flex items-center mb-20">
          <Image
            className="rounded-full"
            src="/images/about_s_3.svg"
            height={252}
            width={252}
          />
          <div className="ml-6 w-3/4">
            <p className="text-3xl about_second_sub_title">The Artist</p>
            <span className="text-3xl about_second_content">
              With a background working with sustainable art, giving back to
              upcoming artist, trained at Christies in London she is a world
              renowned digital artist.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
