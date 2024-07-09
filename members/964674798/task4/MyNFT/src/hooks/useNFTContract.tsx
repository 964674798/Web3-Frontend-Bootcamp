import { useState } from "react";
import { BrowserProvider, JsonRpcSigner, Contract, parseUnits } from "ethers";
import MarketplaceABI from "../abi/Market.json";
import NFTABI from "../abi/NFT.json";
import { useMemo } from "react";
import type { Account, Chain, Client, Transport } from "viem";
import { Config, useConnectorClient } from "wagmi";

// const rpcUrl =
// "https://eth-sepolia.g.alchemy.com/v2/VdAH70NlgnQB8Wrm2RGWlU23a2mzfaU0";
// const marketAddress = "0x7A54819F296076C86c781f8E49A60797BAa2D23A";
// const NFT_ADDRESS = "0xA39dD4F64bC708e8a940fb3934deeC4967125351";

// 本地地址
const marketAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const NFT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

const useNFTContract = ({ chainId }: { chainId?: number } = {}) => {
  const { data: client } = useConnectorClient<Config>({ chainId });
  const signer = useMemo(
    () => (client ? clientToSigner(client) : undefined),
    [client]
  );
  // const signer = client ? clientToSigner(client) : undefined;
  const [nfts, setNfts] = useState([]);

  const marketContract = new Contract(marketAddress, MarketplaceABI, signer);
  const NFCContract = new Contract(NFT_ADDRESS, NFTABI, signer);

  // 查询合约
  const searchNFTS = async () => {
    const listedNfts = await marketContract.searchNFT();
    setNfts(listedNfts);
  };

  // 上架合约
  const listNFTS = async (
    contractAddress: string,
    tokenId: number,
    price: string
  ) => {
    const _tokenId = Number(tokenId);
    console.log(_tokenId, "_tokenId");
    await NFCContract.approve(marketContract, _tokenId);

    const tx = await marketContract.ListingNft(
      contractAddress,
      _tokenId,
      Number(price)
    );

    await tx.wait();
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
