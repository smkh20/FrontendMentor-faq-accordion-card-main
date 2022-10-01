import React from "react";
import woman from "./Illustration-woman-online-mobile.svg";
import shadow from "./Bg-pattern-mobile.svg";
const WomanPic = () => {
  return (
    <>
      <img src={shadow} alt="shadow" />
      <img src={woman} alt="woman" className="woman" />
    </>
  );
};

export default WomanPic;
