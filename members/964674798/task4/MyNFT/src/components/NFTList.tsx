import React from "react";
import useNFTContract from "../hooks/useNFTContract";

// NFT市场
const NFTList = () => {
  const { nfts = [], searchNFTS, purchaseNFT } = useNFTContract();
  console.log(nfts, searchNFTS, "sdF");
  // React.useEffect(() => {
  //   searchNFTS();
  // }, []);

  const handlePurchase = async (listId: number) => {
    try {
      await purchaseNFT(listId);
      alert("NFT purchased successfully!");
    } catch (err) {
      console.error(err);
      alert("Error purchasing NFT");
    }
  };
  console.log(nfts, "nfts");
  return <div onClick={searchNFTS}>查找合约</div>;

  // return (
  //   <div>
  //     <h2>Listed NFTs</h2>
  //     {nfts.length === 0 ? (
  //       <p>No NFTs listed</p>
  //     ) : (
  //       nfts.map((nft, index) => {
  //         const { contractAddress, tokenId, price, seller } = nft || {};
  //         return (
  //           <div key={index}>
  //             <p>Contract Address: {contractAddress}</p>
  //             <p>Token ID: {tokenId}</p>
  //             <p>Price: {price}</p>
  //             <p>Seller: {seller}</p>
  //             <div
  //               onClick={() => {
  //                 handlePurchase(1);
  //               }}
  //             >
  //               购买
  //             </div>
  //           </div>
  //         );
  //       })
  //     )}
  //   </div>
  // );
};

export default NFTList;
