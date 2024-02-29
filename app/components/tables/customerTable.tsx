"use client";

import { ICustomer } from "@/app/domain/ICompany";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CustomerTable() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    const fetchAllCustomers = async () => {
      try {
        const res = await fetch("/api/customers/get-all-customers");
        const data: ICustomer[] = await res.json();
        setCustomers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCustomers();
  }, []);

  return (
    <TableContainer minHeight={"xl"}>
      <Text fontSize={"x-large"}>Customer Overview</Text>
      <Table
        size={"lg"}
        height={"100%"}
        maxHeight={"6xl"}
        overflowY={"auto"}
        variant="simple"
        marginBottom={"small"}
      >
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
