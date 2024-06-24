import React from "react";
import ConnectWallet from "./components/ConnectWallet";
import ListNFT from "./components/ListNFT";
import NFTList from "./components/NFTList";
import PurchaseNFT from "./components/PurchaseNFT";

import "./index.css";

// 我的NFT智能合约
const MyNFT = () => {
  return (
    <div>
      <h1>我的NFT智能合约</h1>
      <ConnectWallet />
    </div>
  );
};

export default MyNFT;
