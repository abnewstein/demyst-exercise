import { BalanceSheet } from "@/types/BalanceSheet";
import { XERO_BALANCE_SHEET_API_URL, XERO_SERVER_URL } from "../constants";

export async function getBalanceSheet() {
  const res = await fetch(`${XERO_SERVER_URL}${XERO_BALANCE_SHEET_API_URL}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: BalanceSheet = await res.json();

  return data;
}
