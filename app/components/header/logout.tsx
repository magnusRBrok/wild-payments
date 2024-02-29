"use client";

import { Link } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <Link
      onClick={() => signOut()}
      fontSize={"large"}
      _hover={{ color: "blue.500" }}
    >
      Logout
    </Link>
  );
}
