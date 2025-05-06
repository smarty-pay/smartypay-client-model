/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export const CurrencyKeys = [
  'UNKNOWN',
  // binance
  'bBUSD',
  'bUSDT',
  'btMNXe',
  'btUSDTv2',
  'btBUSD',
  'btUSDT',
  'btUSDC',
  // polygon
  'pUSDC',
  'pUSDT',
  'paUSDC',
  'paUSDT',
  // arbitrum
  'aUSDC',
  'aUSDT',
  'asUSDC',
  'asUSDT',
  // ethereum
  'eUSDT',
  'eUSDC',
  'eDAI',
  'esUSDT',
  'esUSDC',
] as const;

export type Currency = (typeof CurrencyKeys)[number];
