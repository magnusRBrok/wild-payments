"use server";
import { Container, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
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
      size={"xl"}
      alignItems={"center"}
    >
      <Text fontSize={"x-large"}>Customers Overview</Text>
    </Container>
  );
}
