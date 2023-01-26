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
  | 'Paid'
  | 'Confirmed'
  | 'OverPaid'
  | 'UnderPaid'
  | 'Expired'
  | 'Invalid';