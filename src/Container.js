import React from "react";
import WomanPic from "./WomanPic";
import Question from "./Question";

export const Container = () => {
  return (
    <div className="main">
      <WomanPic />
      <h1 style={{ padding: "20px" }}>FAQ</h1>
      <Question />
    </div>
  );
};
export default Container;
