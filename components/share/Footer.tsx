import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="footer flex items-center justify-around bg-black">
      <div>
        <span className="footer_title text-white">GEMC</span>
      </div>

      <div className="md:hidden">
        <span>
          <span className="footer_title text-white hide_title">GEMC</span>
        </span>
      </div>

      <div className="logo flex items-center mx-60">
        <div className="mx-2">
          <a href="">
            <Image
              className="px-2"
              src="/images/footer_ic_1.svg"
              height={20}
              width={20}
            />
          </a>
        </div>
        <div className="mx-2">
          <a href="">
            <Image
              className="px-2"
              src="/images/footer_ic_2.svg"
              height={20}
              width={20}
            />
          </a>
        </div>
        <div className="mx-2">
          <a href="">
            <Image
              className="px-2"
              src="/images/footer_ic_3.svg"
              height={20}
              width={20}
            />
          </a>
        </div>
        <div className="mx-2">
          <a href="">
            <Image
              className="px-2"
              src="/images/footer_ic_4.svg"
              height={20}
              width={20}
            />
          </a>
        </div>
        <div className="mx-2">
          <a href="">
            <Image
              className="px-2"
              src="/images/footer_ic_5.svg"
              height={20}
              width={20}
            />
          </a>
        </div>
      </div>

      <div>
        <p className="footer_copy font-bold text-2xl text-white">
          Copyright GEMC 2022
        </p>
      </div>
    </div>
  );
}
