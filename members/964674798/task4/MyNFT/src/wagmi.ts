import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [
    mainnet,
    sepolia,
    { id: 1337, name: "Localhost 8545", rpcUrls: ["http://localhost:8545"] },
  ],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "WanFengWallet" }),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
