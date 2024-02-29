import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@test.dk",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        console.log("user fetched", user);
        const succes = user?.password == credentials?.password;

        prisma.$disconnect;

        return succes && user
          ? {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              role: "admin",
            }
          : null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
