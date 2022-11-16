import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { DispatchPlayerContext, PlayerContext, playerInitialState, playerReducer } from '@decent.xyz/sdk/node_modules/decent-audio-player';
import { useReducer } from 'react';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  [
    // alchemyProvider({
    //   // This is Alchemy's default API key.
    //   // You can get your own at https://dashboard.alchemyapi.io
    //   apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    // }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});


function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(playerReducer, playerInitialState);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <PlayerContext.Provider value={state}>
          <DispatchPlayerContext.Provider value={dispatch}>
            <Component {...pageProps} />
          </DispatchPlayerContext.Provider>
        </PlayerContext.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
