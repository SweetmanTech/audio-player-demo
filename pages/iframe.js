import { ConnectButton } from "@rainbow-me/rainbowkit";

const Iframe = () => {
  return (
    <div>
      <h1>Step 1: Follow Me On Lens</h1>
      <button>LENS FOLLOW BUTTON</button>
      <h1>Step 2: Collect Pin</h1>
      <p>Current Price: 1.5 ETH</p>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button onClick={openAccountModal} type="button">
                      BUY NOW
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
      <h1>Step 3: Enter Vault</h1>
      <button>Enter Vault</button>
    </div>
  );
};

export default Iframe;
