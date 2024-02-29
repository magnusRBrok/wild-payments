"use client";

import { IPayments } from "@/app/domain/IPayments";
import {
  Flex,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomerFilter from "./customerFilter";
import { ICustomer } from "@/app/domain/ICompany";

export default function PaymentsTable() {
  const [payments, setPayments] = useState<IPayments[]>([]);
  const [shownPayments, setShownPayments] = useState<IPayments[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<number>();

  useEffect(() => {
    const fetchAllPayments = async () => {
      try {
        const res = await fetch("/api/payments/get-all-payments");
        const data: IPayments[] = await res.json();
        setPayments(data);
        setShownPayments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllPayments();
  }, []);

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

  useEffect(() => {
    if (selectedCustomer) {
      setShownPayments(
        payments.filter((value) => value.company.id == selectedCustomer)
      );
    } else {
      setShownPayments(payments);
    }
  }, [selectedCustomer]);

  return (
    <TableContainer minHeight={"xl"}>
      <Flex>
        <Text fontSize={"x-large"}>Payments Overview</Text>
        <Spacer />
        {customers && (
          <CustomerFilter
            onClickCallback={(id: number) => setSelectedCustomer(id)}
            customers={customers}
          />
        )}
      </Flex>
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
            <Th>Date</Th>
            <Th>Currency</Th>
            <Th>Amount</Th>
            <Th>Finalized</Th>
            <Th>Company</Th>
          </Tr>
        </Thead>
        <Tbody>
          {shownPayments.map((payment) => (
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
