import { ICompany } from "./ICompany";

export interface IPayments {
  id: number;
  createdAt: string;
  currency?: string;
  amount?: number;
  finalized: Boolean;
  company?: ICompany;
}
