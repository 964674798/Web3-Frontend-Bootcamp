import React, { useState } from 'react';
import useNFTContract from '../hooks/useNFTContract';

const ListNFT = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const { listNFTS } = useNFTContract();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await listNFTS(contractAddress, Number(tokenId), price);
      console.log('success')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="NFT Contract Address"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price (ERC20 Token)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">List NFT</button>
    </form>
  );
};

export default ListNFT;
