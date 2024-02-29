"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, Flex } from "@chakra-ui/react";

export default function page() {
  return (
    <div>
      Payments page
      <Button>test</Button>
      <Flex maxWidth={"200px"}>
        <Link href={"/payments"}>Payments</Link>
        <Link href={"/customers"}>Customers</Link>
      </Flex>
    </div>
  );
}
