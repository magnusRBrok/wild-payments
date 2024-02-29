"use client";

import { Stack, Input, Button } from "@chakra-ui/react";
import { FormEvent } from "react";
import { authenticate } from "../lib/actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await authenticate("credentials", formData);
    console.log("laksemad", response);
    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={"5px"} direction={"column"}>
        <Input type="email" name="email" placeholder="test@test.dk" required />
        <Input type="password" name="password" placeholder="test" required />
        <Button colorScheme="blue" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
}
