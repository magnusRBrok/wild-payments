"use server";
import { Container, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import PaymentsTable from "../components/tables/paymentsTable";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession();
  if (session === null) {
    redirect("/login");
  }

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
