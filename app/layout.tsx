import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/header/header";
import { Container, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wild payments",
  description: "View customer and payment data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex direction={"column"} alignItems={"center"}>
            <Header />
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
