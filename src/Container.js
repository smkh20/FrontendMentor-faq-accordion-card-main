import React, { useState } from "react";
import WomanPic from "./WomanPic";
import Question from "./Question";
import arr from "./data.js";
export const Container = () => {
  const [showItemIndex, setIndex] = useState(null);

  const toggleShow = (index) => {
    if (showItemIndex === index) {
      setIndex(null);
    } else {
      setIndex(index);
    }
  };
  return (
    <div className="main">
      <WomanPic />
      <h1 style={{ padding: "20px", color: "var(--txtDesaturatedBlue)" }}>FAQ</h1>
      <div className="questioncontainer">
        {arr.map((faq, index) => (
          <Question key={index} faq={faq} toggle={() => toggleShow(index)} show={showItemIndex === index} />
        ))}
      </div>
    </div>
  );
};
export default Container;
