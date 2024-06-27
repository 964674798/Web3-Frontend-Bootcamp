async function main() {
  // Deploy NFTMarket
  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const nFTMarket = await NFTMarket.deploy();
  await nFTMarket.deployed();
  console.log("NFTMarket deployed to:", nFTMarket.address);

  // Deploy Token
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // Deploy NFT
  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
