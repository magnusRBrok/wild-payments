import { signIn } from "next-auth/react";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return result;
  } catch (error) {
    throw error;
  }
}
