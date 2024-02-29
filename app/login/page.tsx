import { Box } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import LoginForm from "./loginForm";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <Box margin={"auto"} width={"200px"} height={"200px"}>
      <LoginForm />
    </Box>
  );
}
