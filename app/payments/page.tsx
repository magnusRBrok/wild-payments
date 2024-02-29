"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import PaymentsTable from "../components/tables/paymentsTable";

export default function page() {
  return (
    <Container
      borderRadius={"6px"}
      bgColor={"gray.50"}
      padding={"20px"}
      maxWidth={"6xl"}
      maxHeight={"4xl"}
      alignItems={"center"}
      overflowY={"auto"}
    >
      <Text fontSize={"x-large"}>Payments Overview</Text>
      <PaymentsTable />
    </Container>
  );
}
