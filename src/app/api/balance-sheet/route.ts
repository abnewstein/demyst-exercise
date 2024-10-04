import { fetchBalanceSheet } from "@/services/fetchBalanceSheet";
import { BalanceSheet } from "@/types/BalanceSheet";
import { NextResponse } from "next/server";

export async function GET() {
  const data: BalanceSheet = await fetchBalanceSheet();
  if (data.Status !== "OK") {
    return NextResponse.json({
      Message: "Error fetching the balance sheet.",
      ...data,
    });
  }
  return NextResponse.json(data);
}
