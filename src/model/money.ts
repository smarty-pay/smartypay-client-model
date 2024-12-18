/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { CurrencyKeys } from './Currency';

import type { Currency } from './Currency';

export interface Money {
  value: string;
  currency: Currency;
}

export function sameMoney(a?: Money, b?: Money) {
  return a && b && a.value === b.value && a.currency === b.currency;
}

/** {amount: 100, currency: "USD"} -> "100 USD" */
export function toMoneyString(money: Money) {
  return `${money.value} ${money.currency}`;
}

/** "1.5 USD" -> {amount: 1.5, currency: "USD"} */
export function parseMoney(value: string | Money): Money {
  if ((value as Money).currency) return value as Money;

  const [amount, currency] = (value as string).split(' ');

  return {
    currency: CurrencyKeys.find((c) => c === currency) || 'UNKNOWN',
    value: amount.trim(),
  };
}
