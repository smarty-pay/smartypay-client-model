/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import {Network} from './Network';
import {Currency} from './Currency';

export interface Token {
  network: Network,
  tokenId: string,
  abbr: string,
  decimals: number,
}

export const Assets: Record<Exclude<Currency, 'UNKNOWN'>, Token> = {
  // BinanceMainNet
  bBUSD: {
    network: 'BinanceMainNet',
    tokenId: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    abbr: 'BUSD',
    decimals: 18,
  },
  bUSDT: {
    network: 'BinanceMainNet',
    tokenId: '0x55d398326f99059fF775485246999027B3197955',
    abbr: 'USDT',
    decimals: 18,
  },
  // BinanceTestNet
  btMNXe: {
    network: 'BinanceTestNet',
    tokenId: '0xd570e1ee81a8ca94008e1cf75c72b5e7a7b83bc5',
    abbr: 'EURx',
    decimals: 8,
  },
  btBUSD: {
    network: 'BinanceTestNet',
    tokenId: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
    abbr: 'BUSD',
    decimals: 18,
  },
  btUSDTv2: {
    network: 'BinanceTestNet',
    tokenId: '0x3f43f5812c6e57a7c9ccb9cdc03104d1d907cd09',
    abbr: 'USDT',
    decimals: 18,
  },
  // PolygonMainNet
  pUSDC: {
    network: 'PolygonMainNet',
    tokenId: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    abbr: 'USDC',
    decimals: 6,
  },
  pUSDT: {
    network: 'PolygonMainNet',
    tokenId: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    abbr: 'USDT',
    decimals: 6,
  },
  // PolygonMumbaiNet
  pmUSDC: {
    network: 'PolygonMumbaiNet',
    tokenId: '0x7A7707cEE9bbF4D2Ce8f227865D456164841e4E5',
    abbr: 'USDC',
    decimals: 18,
  },
  pmUSDT: {
    network: 'PolygonMumbaiNet',
    tokenId: '0x9b3273282f3b68dbF9b2c35f784cB1a012Cd670B',
    abbr: 'USDT',
    decimals: 18,
  },
  // ArbitrumMainNet
  aUSDC: {
    network: 'ArbitrumMainNet',
    tokenId: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    abbr: 'USDC',
    decimals: 6,
  },
  aUSDT: {
    network: 'ArbitrumMainNet',
    tokenId: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    abbr: 'USDT',
    decimals: 6,
  },
  // ArbitrumTestNet
  atUSDT: {
    network: 'ArbitrumTestNet',
    tokenId: '0x4D126f75891e779021187f55314F95BE1D19e7ff',
    abbr: 'USDT',
    decimals: 18,
  },
  atUSDC: {
    network: 'ArbitrumTestNet',
    tokenId: '0x3668789EDa9D053Ee8B77653dA167CD73e6ef8fa',
    abbr: 'USDC',
    decimals: 18,
  },
  // EthereumMainNet
  USDT: {
    network: 'EthereumMainNet',
    tokenId: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abbr: 'USDT',
    decimals: 6,
  },
  USDC: {
    network: 'EthereumMainNet',
    tokenId: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    abbr: 'USDC',
    decimals: 6,
  },
  DAI: {
    network: 'EthereumMainNet',
    tokenId: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    abbr: 'DAI',
    decimals: 18,
  },
  // EthereumGoerli
  gUSDT: {
    network: 'EthereumGoerli',
    tokenId: '0xfea7812643e0404a718018172a8bfe0db35bc745',
    abbr: 'USDT',
    decimals: 18,
  },
  gUSDC: {
    network: 'EthereumGoerli',
    tokenId: '0x2b11e7b5efe158d08c52a4fa400e07d8fd6a43ec',
    abbr: 'USDC',
    decimals: 18,
  }
}