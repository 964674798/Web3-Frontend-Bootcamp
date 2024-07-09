import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://localhost:8545", // 本地节点的 RPC URL
      chainId: 31337, // 本地节点的 Chain ID
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'], // 可选：用于部署交易的私钥数组
    },
  },
};

export default config;
