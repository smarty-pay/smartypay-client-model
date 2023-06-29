/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {Currency} from './Currency';
import {Network} from './Network';


export interface SubscriptionPlan {
  id: string,
  companyId: number,
  name?: string,
  description: string,
  amount: string,
  periodSeconds: number,
  createdAt: string,
  status: SubscriptionPlanStatus,
  tags: string[],
}


export type SubscriptionPlanStatus = 'Draft' | 'Active' | 'Archived'



export interface Subscription {
  contractAddress: string,
  planId: string,
  amount: string,
  asset: Currency,
  blockchain: Network,
  customerId: string,
  nextChargeAt: string,
  payer: string,
  createdAt: string,
  metadata?: string,
  status: SubscriptionStatus,
  allowance: string,
}

export type SubscriptionStatus =
  'Draft'
  | 'Pending'
  | 'Active'
  | 'Suspended'
  | 'PendingPause'
  | 'Paused'
  | 'PendingUnPause'
  | 'Finished'
  | 'PendingCancel'
  | 'Cancelled'
  | 'Error';


export interface SubscriptionId {
  contractAddress: string
}

export interface SubscriptionCharge {
  id: string,
  contractAddress: string,
  amount: string,
  chargeDate: string,
  status: SubscriptionChargeStatus,
}


export type SubscriptionChargeStatus =
  "Pending"
  | "Succeeded"
  | "Retrying"
  | "Failed"
  | "Cancelled";