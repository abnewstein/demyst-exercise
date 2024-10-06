import { fetchBalanceSheet } from "@/services/fetchBalanceSheet";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error, status } = await fetchBalanceSheet();

  if (error) {
    return NextResponse.json({ Error: error, Status: status }, { status });
  }

  return NextResponse.json(data, { status: 200 });
}
