import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://localhost:8545", // 本地节点的 RPC URL
      chainId: 1337, // 本地节点的 Chain ID
      accounts: [], // 可选：用于部署交易的私钥数组
    },
  },
};

export default config;
