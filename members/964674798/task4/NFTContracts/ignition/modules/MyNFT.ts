import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("My_NFT", (m) => {

  const myNFT = m.contract("MyNFT", [], {
  });

  return { myNFT };
});

export default LockModule;