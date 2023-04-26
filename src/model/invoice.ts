/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/


export interface Invoice {
  id: string,
  companyId: number,
  paymentAddress: string,
  amount: string,
  status: InvoiceStatus,
  createdAt: Date,
  expiresAt: Date,
  paidAt?: Date | null,
  paidAmount?: string,
  errorCode?: string,
  sequenceNumber: number,
  createdAtBlock: number,
  auxAmounts: string[],
}


export type InvoiceStatus =
  'Created'
  | 'Confirming'
  | 'Paid'
  | 'SimplePaid'
  | 'OverPaid'
  | 'UnderPaid'
  | 'Expired'
  | 'Invalid'
  | 'Withdrawn';


export function isSuccessStatus(status: InvoiceStatus): boolean {
  return status === 'Paid'
    || status === 'SimplePaid'
    || status === 'Withdrawn';
}

export function isFailedStatus(status: InvoiceStatus): boolean {
  return status === 'OverPaid'
    || status === 'UnderPaid'
    || status === 'Expired'
    || status === 'Invalid';
}