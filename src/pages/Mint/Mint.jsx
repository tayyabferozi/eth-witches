import React from "react";

import MintBox from "./MintBox";

const Mint = () => {
  return (
    <div className="page-section" id="mint">
      <div className="page-container">
        <div className="social">
          <a href="#0">
            <img src="/assets/brand-os.svg" alt="brand" />
          </a>
          <a href="#0">
            <img src="/assets/brand-twitter.svg" alt="brand" />
          </a>
          <a href="#0">
            <img src="/assets/brand-3.svg" alt="brand" />
          </a>
        </div>
        <h1>
          <div>ETH WITCHES</div>
        </h1>

        <div className="mint-boxes">
          <MintBox title="WHITELIST" remaining="0" />
          <MintBox title="PUBLIC" remaining="372" />
        </div>
      </div>
    </div>
  );
};

export default Mint;
