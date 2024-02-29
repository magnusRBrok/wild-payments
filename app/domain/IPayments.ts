import { ICustomer } from "./ICompany";

export interface IPayments {
  payment: ICustomer | undefined;
  id: number;
  createdAt: string;
  currency?: string;
  amount?: number;
  finalized: Boolean;
  company: ICustomer;
}
