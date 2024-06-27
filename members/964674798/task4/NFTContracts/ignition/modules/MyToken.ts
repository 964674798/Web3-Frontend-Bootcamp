import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("TokenModule", (m) => {

  const myNFT = m.contract("MyToken", [100000], {});

  return { myNFT };
});

export default LockModule;
