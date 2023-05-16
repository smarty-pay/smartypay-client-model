/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {Network} from './Network';

export interface Blockchain {
  chainId: number,
  chainIdHex: string,
  rpc: string,
  explorer: string,
  chainName: string,
  native: string,
}

export const Blockchains: Record<Network, Blockchain> = {

  BinanceMainNet: {
    chainId: 56,
    chainIdHex: '0x38',
    rpc: 'https://bsc-dataseed.binance.org',
    explorer: 'https://bscscan.com',
    chainName: 'Binance Smart Chain Mainnet',
    native: 'BNB',
  },
  BinanceTestNet: {
    chainId: 97,
    chainIdHex: '0x61',
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    explorer: 'https://testnet.bscscan.com',
    chainName: 'Binance Smart Chain Testnet',
    native: 'BNB',
  },
  PolygonMainNet: {
    chainId: 137,
    chainIdHex: '0x89',
    rpc: 'https://polygon-rpc.com',
    explorer: 'https://polygonscan.com',
    chainName: 'Polygon Mainnet',
    native: 'MATIC',
  },
  PolygonMumbaiNet: {
    chainId: 80001,
    chainIdHex: '0x13881',
    rpc: 'https://polygon-testnet.public.blastapi.io',
    explorer: 'https://mumbai.polygonscan.com',
    chainName: 'Polygon Testnet',
    native: 'MATIC',
  },
  ArbitrumMainNet: {
    chainId: 42161,
    chainIdHex: '0xa4b1',
    rpc: 'https://arb1.arbitrum.io/rpc',
    explorer: 'https://arbiscan.io',
    chainName: 'Arbitrum Mainnet',
    native: 'ETH',
  },
  ArbitrumTestNet: {
    chainId: 421613,
    chainIdHex: '0x66eed',
    rpc: 'https://goerli-rollup.arbitrum.io/rpc',
    explorer: 'https://testnet.arbiscan.io',
    chainName: 'Arbitrum Testnet',
    native: 'ETH',
  },
  EthereumMainNet: {
    chainId: 1,
    chainIdHex: '0x1',
    rpc: 'https://rpc.ankr.com/eth',
    explorer: 'https://etherscan.io',
    chainName: 'Ethereum Mainnet',
    native: 'ETH',
  },
  EthereumGoerli: {
    chainId: 5,
    chainIdHex: '0x5',
    rpc: 'https://eth-goerli.public.blastapi.io',
    explorer: 'https://goerli.etherscan.io',
    chainName: 'Ethereum Goerli',
    native: 'ETH',
  }
}