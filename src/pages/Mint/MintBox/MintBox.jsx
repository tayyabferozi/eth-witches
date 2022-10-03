import React from "react";
import { useState } from "react";

const MintBox = ({ title, remaining }) => {
  const [formState, setFormState] = useState({
    rangeVal: 1,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (value < 1) {
      return;
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mint-box">
      <h2>{title}</h2>

      <div className="quantity">Quantity - {formState.rangeVal}</div>

      <div class="slidecontainer">
        <input
          type="range"
          min="0"
          max="2"
          defaultValue="50"
          className="slider"
          name="rangeVal"
          value={formState.rangeVal}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="quantity">{remaining} Remaining</div>

      <button className="btn">MINT</button>
    </div>
  );
};

export default MintBox;
