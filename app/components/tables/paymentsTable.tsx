"use client";

import { IPayments } from "@/app/domain/IPayments";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PaymentsTable() {
  const [payments, setPayments] = useState<IPayments[]>([]);
  const [company, setCompany] = useState<number>();

  useEffect(() => {
    const fetchAllPayments = async () => {
      try {
        const res = await fetch("/api/payments/get-all-payments");
        const data: IPayments[] = await res.json();
        setPayments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllPayments();
  }, []);

  return (
    <TableContainer>
      <Table size={"lg"} maxHeight={"6xl"} overflowY={"auto"} variant="striped">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date</Th>
            <Th>Currency</Th>
            <Th>Amount</Th>
            <Th>Finalized</Th>
            <Th>Company</Th>
          </Tr>
        </Thead>
        <Tbody>
          {payments.map((payment) => (
            <Tr key={payment.id}>
              <Td>{payment.id}</Td>
              <Td>{payment.createdAt}</Td>
              <Td>{payment.currency}</Td>
              <Td>{payment.amount}</Td>
              <Td>{payment.finalized ? "Yes" : "No"}</Td>
              <Td>{payment.company?.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
