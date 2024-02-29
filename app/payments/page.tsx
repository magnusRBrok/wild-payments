"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, Container, Flex, Text } from "@chakra-ui/react";

export default function page() {
  return (
    <Container
      borderRadius={"6px"}
      bgColor={"gray.50"}
      padding={"20px"}
      size={"xl"}
      alignItems={"center"}
    >
      <Text fontSize={"x-large"}>Payments Overview</Text>
    </Container>
  );
}
