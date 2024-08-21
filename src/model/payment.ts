/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export interface Payment {
  id: string;
  companyId: number;
  paymentAddress: string;
  amount: string;
  status: PaymentStatus;
  createdAt: Date;
  expiresAt: Date;
  paidAt?: Date | null;
  paidAmount?: string;
  errorCode?: string;
  sequenceNumber: number;
  createdAtBlock: number;
  auxAmounts: string[];
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
