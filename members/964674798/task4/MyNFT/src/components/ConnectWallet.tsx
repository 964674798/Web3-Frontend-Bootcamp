import React from "react";
import { useConnect, useAccount } from "wagmi";
import { injected } from "wagmi/connectors";

// 链接钱包
const ConnectWallet = () => {
  const { connect, status, data, error } = useConnect();

  return (
    <div>
      {status !== "success" && (
        <button onClick={() => connect({ connector: injected() })}>
          Connect
        </button>
      )}
      {status === "success" && <div>Account : {data?.accounts[0]}</div>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ConnectWallet;
