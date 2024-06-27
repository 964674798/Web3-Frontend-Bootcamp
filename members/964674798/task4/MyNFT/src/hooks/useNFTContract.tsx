import { useState } from "react";
import { ethers } from "ethers";
import MarketplaceABI from "../abi/Market.json";
import NFTABI from "../abi/NFT.json";

// const rpcUrl =
// "https://eth-sepolia.g.alchemy.com/v2/VdAH70NlgnQB8Wrm2RGWlU23a2mzfaU0";
// const marketAddress = "0x7A54819F296076C86c781f8E49A60797BAa2D23A";
// const NFT_ADDRESS = "0xA39dD4F64bC708e8a940fb3934deeC4967125351";

// 本地地址
const marketAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const NFT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const rpcUrl = "http://127.0.0.1:8545/";

const useNFTContract = () => {
  const [nfts, setNfts] = useState([]);

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  // const privateKey =
  //   "0x162bf78a28c70e37467b11e5bf4511398dcd7eb0641029a9bd044852ebfadb01";
  const privateKey = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = wallet.connect(provider);

  const marketContract = new ethers.Contract(
    marketAddress,
    MarketplaceABI,
    signer
  );
  const NFCContract = new ethers.Contract(NFT_ADDRESS, NFTABI, signer);

  // 查询合约
  const searchNFTS = async () => {
    const listedNfts = await marketContract.listings();
    setNfts(listedNfts);
  };

  // 上架合约
  const listNFTS = async (contractAddress, tokenId, price) => {
    const priceInWei = ethers.parseUnits(price);

    const tx = await marketContract.ListingNft(
      contractAddress,
      tokenId,
      priceInWei
    );

    await tx.await();
  };

  // 购买合约
  const purchaseNFT = async (listId: number) => {
    const tx = await marketContract.buyListingNft(listId);

    await tx.await();
  };

  // TODO 下架合约

  // 铸造NFT
  const mintNFT = async (userAddress: string) => {
    const data = await NFCContract.mintNFT(userAddress);
    console.log(data, "data");
  };

  return {
    nfts,
    listNFTS,
    searchNFTS,
    purchaseNFT,
    mintNFT,
  };
};

export default useNFTContract;
