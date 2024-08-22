/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import type { Money } from './money';
import type { Network } from './Network';

export interface Payment {
  id: string;
  paymentAddress: string;
  amount: Money;
  status: PaymentStatus;
  createdAt: Date;
  expiresAt: Date;
  paidAt?: Date;
  paidAmount?: Money;
  errorCode?: string;
  createdAtBlock?: CreatedAtBlock[];
  metadata?: any;
  description?: string;
}

export interface CreatedAtBlock {
  blockchain: Network;
  blockNum: string;
}

export type PaymentStatus =
  | 'Created'
  | 'Confirming'
  | 'Paid'
  | 'SimplePaid'
  | 'OverPaid'
  | 'UnderPaid'
  | 'Expired'
  | 'Invalid'
  | 'Withdrawn';

export function isSuccessStatus(status: PaymentStatus): boolean {
  return status === 'Paid' || status === 'SimplePaid' || status === 'Withdrawn';
}

export function isFailedStatus(status: PaymentStatus): boolean {
  return status === 'OverPaid' || status === 'UnderPaid' || status === 'Expired' || status === 'Invalid';
}

export function normalizePayment(payment: Payment): Payment {
  return {
    ...payment,
    createdAt: new Date(payment.createdAt),
    expiresAt: new Date(payment.expiresAt),
    paidAt: payment.expiresAt ? new Date(payment.expiresAt) : undefined,
  };
}
