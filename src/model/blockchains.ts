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
  PolygonAmoy: {
    chainId: 80002,
    chainIdHex: '0x13882',
    rpc: 'https://rpc-amoy.polygon.technology',
    explorer: 'https://amoy.polygonscan.com',
    chainName: 'Polygon Amoy Testnet',
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
  ArbitrumSepolia: {
    chainId: 421614,
    chainIdHex: '0x66eee',
    rpc: 'https://sepolia-rollup.arbitrum.io/rpc',
    explorer: 'https://sepolia.arbiscan.io',
    chainName: 'Arbitrum Sepolia',
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
  EthereumSepolia: {
    chainId: 11155111,
    chainIdHex: '0xaa36a7',
    rpc: 'https://ethereum-sepolia-rpc.publicnode.com',
    explorer: 'https://sepolia.etherscan.io',
    chainName: 'Ethereum Sepolia',
    native: 'ETH',
  }
}