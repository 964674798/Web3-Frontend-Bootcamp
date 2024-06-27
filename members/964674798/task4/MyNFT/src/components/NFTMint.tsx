import React, { useState } from "react";
import useNFTContract from "../hooks/useNFTContract";

// NFT市场
const NFTMint = () => {
  const [address, setAddress] = useState("");
  const { mintNFT } = useNFTContract();

  const _mintNFT = async (address: string) => {
    try {
      await mintNFT(address);
      console.log("success");
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="NFT Contract Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button
        onClick={() => {
          if (address) {
            _mintNFT(address);
          }
        }}
      >
        开始造币
      </button>
    </div>
  );
};

export default NFTMint;
