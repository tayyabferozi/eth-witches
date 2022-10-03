import React from "react";

const MintBox = ({ title, quantity, remaining }) => {
  return (
    <div className="mint-box">
      <h2>{title}</h2>

      <div className="quantity">Quantity-{quantity}</div>

      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue="50"
          className="slider"
        />
      </div>

      <div className="quantity">{remaining} Remaining</div>

      <button className="btn">MINT</button>
    </div>
  );
};

export default MintBox;
