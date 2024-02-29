"use client";
import { Button, Container, Text } from "@chakra-ui/react";

export default function page() {
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
