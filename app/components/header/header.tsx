"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      borderBottom={"1px"}
      borderColor={"gray.400"}
      width={"100%"}
      padding={"10px"}
      justifyContent={"center"}
      marginBottom={"30px"}
    >
      <Flex minWidth={"200px"}>
        <Link
          fontSize={"large"}
          _hover={{ color: "blue.500" }}
          href={"/payments"}
        >
          Payments
        </Link>
        <Spacer />
        <Link
          fontSize={"large"}
          _hover={{ color: "blue.500" }}
          href={"/customers"}
        >
          Customers
        </Link>
      </Flex>
    </Flex>
  );
}
