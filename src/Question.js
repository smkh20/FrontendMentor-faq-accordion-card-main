import React, { useState } from "react";

const Question = () => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow((show) => !show)}>
      <h2>title</h2>
      {show && <p>gfjdh</p>}
    </div>
  );
};

export default Question;
