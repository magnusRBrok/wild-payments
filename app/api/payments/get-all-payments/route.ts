import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession();
  console.log("Hit endpoint", session);
  try {
    const companies = await prisma.payment.findMany({
      select: {
        id: true,
        createdAt: true,
        currency: true,
        amount: true,
        finalized: true,
        company: true,
      },
    });
    console.log("reuslt", companies);

    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
