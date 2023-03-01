/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export const CurrencyKeys = <const>[
  'UNKNOWN',
  // binance
  'bBUSD',
  'bUSDT',
  'btMNXe',
  'btUSDTv2',
  'btBUSD',
  // polygon
  'pUSDC',
  'pUSDT',
  'pmUSDC',
  'pmUSDT',
  // arbitrum
  'aUSDC',
  'aUSDT',
  'atUSDC',
  'atUSDT',
  // ethereum
  'USDT',
  'USDC',
  'DAI',
  'gUSDT',
  'gUSDC',
];

export type Currency = typeof CurrencyKeys[number];