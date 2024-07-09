const { ethers } = require("hardhat");

async function main() {

  // Deploy Token
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(10000);
  console.log(token,'token')
  await token.deployTransaction.wait();
  console.log("Token deployed to:", token.address);

  // Deploy NFT
  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

   // Deploy NFTMarket
   const NFTMarket = await ethers.getContractFactory("NFTMarket");
   const nFTMarket = await NFTMarket.deploy();
   await nFTMarket.deployed(token.address,10);
   console.log("NFTMarket deployed to:", nFTMarket.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
