import { ICustomer } from "@/app/domain/ICompany";
import { Select } from "@chakra-ui/react";

interface MenuProps {
  customers: ICustomer[];
  onClickCallback: (id: number) => void;
}
export default function CustomerFilter({
  customers,
  onClickCallback,
}: MenuProps) {
  return (
    <Select
      onChange={(e) => {
        console.log(e.currentTarget.value);
        onClickCallback(Number(e.currentTarget.value));
      }}
      placeholder="Customer Filter"
      width={"small"}
    >
      {customers.map((customer) => (
        <option value={customer.id} key={customer.id}>
          {customer.name}
        </option>
      ))}
    </Select>
  );
}
