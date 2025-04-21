import ClearSession from '@/components/ClearSession';
// Inside your App component's return block
<ClearSession />
// clear session

import { useEffect } from 'react'
import { disconnect } from 'wagmi/actions'

// styles
import '@/styles/globals.css'

// wagmi + chains + rainbowkit
import { WagmiConfig, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'


// react-query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// React Query client
const queryClient = new QueryClient()

// Chain setup
const chains = [mainnet]

const { connectors } = getDefaultWallets({
  appName: 'CryptoGamingToken',
  projectId: '8f94ae065cf1c0f9c9da4d638aa35467',
  chains,
})

const config = createConfig({
  connectors,
  chains,
  transports: {
    [mainnet.id]: http()
  },
  ssr: true,
  autoConnect: true,
})
  export default function App({ Component, pageProps }) {
    return (
      <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <ClearSession />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>    
    );
  }
  
