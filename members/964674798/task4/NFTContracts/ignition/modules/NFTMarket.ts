import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("MarketModule", (m) => {
  const myNftMarket = m.contract("NFTMarket", [
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    100,
  ]);

  return { myNftMarket };
});

export default LockModule;
