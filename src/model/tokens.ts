/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import { CurrencyKeys } from './Currency';

import type { Currency } from './Currency';
import type { Network } from './Network';

export interface Token {
  network: Network;
  tokenId: string;
  abbr: string;
  symbol?: string;
  decimals: number;
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
    symbol: 'USDTv2',
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
  // PolygonAmoy
  paUSDC: {
    network: 'PolygonAmoy',
    tokenId: '0x5aA0B22E1A2a380350f236D2E6183DA3d7404C91',
    abbr: 'USDC',
    decimals: 18,
  },
  paUSDT: {
    network: 'PolygonAmoy',
    tokenId: '0xb752D5d6Ad566b3720D8CD374BDA68A16D0c68d0',
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
  asUSDT: {
    network: 'ArbitrumSepolia',
    tokenId: '0xb752D5d6Ad566b3720D8CD374BDA68A16D0c68d0',
    abbr: 'USDT',
    decimals: 18,
  },
  asUSDC: {
    network: 'ArbitrumSepolia',
    tokenId: '0x5aA0B22E1A2a380350f236D2E6183DA3d7404C91',
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
  // EthereumSepolia
  sUSDT: {
    network: 'EthereumSepolia',
    tokenId: '0x8B076B0F6F7fb47d88B4F90FA048D146a2407Df4',
    abbr: 'USDT',
    decimals: 18,
  },
  sUSDC: {
    network: 'EthereumSepolia',
    tokenId: '0xcfaF00fcb99607a46Ead9796Aa2EC66A1DE714C3',
    abbr: 'USDC',
    decimals: 18,
  },
};

export function getTokenByCurrency(currency: any): Token {
  const found = CurrencyKeys.find((c) => c === currency);
  if (!found || found === 'UNKNOWN') {
    throw new Error(`unknown token for currency "${currency}"`);
  }
  return Assets[found];
}

export function getAmountWithTokenLabel(amountWithToken: string): string {
  const [amount, asset] = amountWithToken.split(' ');
  const token = getTokenByCurrency(asset);
  return `${amount} ${token.abbr}`;
}
