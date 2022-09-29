import Image from "next/image";
import React from "react";

export default function SectionThree() {
  return (
    <div className="about_third_section">
      <div className="pt-10">
        <p className="about_third_title text-center text-white font-bold">
          Want to collab with us?
        </p>
      </div>
      <div className="flex justify-center py-20">
        <Image src="/images/about_t_logo.svg" height={180} width={170} />
      </div>
      <div>
        <p className="about_third_content text-center text-white font-bold text-2xl leading-9">
          GEMC collaborates with and supports emerging artists from around the
          globe. <br /> If you’re an artist, nonprofit or brand looking to
          collaborate, reach out to us at contact@gemc.io.
        </p>
      </div>
    </div>
  );
}
