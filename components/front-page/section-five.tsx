import React from "react";

export default function SectionFive() {
  return (
    <div className="section_five flex justify-around px-10">
      <div className="s5_left w-2/4">
        <div className="my-10">
          <p className="s5_title">Rarity</p>
        </div>
        <p className="s5_content">While each GEMC NFT is definitely cool: </p>
        <div className="h-5"></div>
        <p className="s5_content">
          Some GEMC NFTs are rare.
          <br /> Some are very rare. <br /> And some are exceptional!
        </p>
      </div>

      <div className="s5_right rounded-xl mt-20 px-10 py-10">
        <div className="flex justify-between">
          <p className="s5_right_number">10,000</p>
          <p className="s5_right_text">rhinos</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">11</p>
          <p className="s5_right_text">background</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">14</p>
          <p className="s5_right_text">skin tones</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">24</p>
          <p className="s5_right_text">jackets</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">12</p>
          <p className="s5_right_text">shoes</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">6</p>
          <p className="s5_right_text">horns</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">8</p>
          <p className="s5_right_text">mouth</p>
        </div>
        <div className="flex justify-between">
          <p className="s5_right_number">10</p>
          <p className="s5_right_text">eyes</p>
        </div>
      </div>
    </div>
  );
}
