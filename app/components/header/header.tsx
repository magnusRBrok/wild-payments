import { Box, Container, Flex, Spacer, Link } from "@chakra-ui/react";
import Logout from "./logout";
import { getServerSession } from "next-auth";

export default async function Header() {
  const session = await getServerSession();

  return (
    <Flex
      borderBottom={"1px"}
      borderColor={"gray.400"}
      bgColor={"blue.100"}
      width={"100%"}
      padding={"10px"}
      marginBottom={"30px"}
      justifyContent={"center"}
    >
      <Flex width={"6xl"} justifyContent={"center"} flexDir={"row"}>
        <></>
        <Spacer />

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
        <Spacer />
        <div>
          {session?.user ? (
            <Logout />
          ) : (
            <Link href="/login" color="blue.400" _hover={{ color: "blue.500" }}>
              login
            </Link>
          )}
        </div>
      </Flex>
    </Flex>
  );
}
