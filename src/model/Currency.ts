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
  'asUSDC',
  'asUSDT',
  // ethereum
  'USDT',
  'USDC',
  'DAI',
  'sUSDT',
  'sUSDC',
];

export type Currency = typeof CurrencyKeys[number];