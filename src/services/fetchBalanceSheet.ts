import { BalanceSheet } from "@/types/BalanceSheet";
import { XERO_BALANCE_SHEET_API_URL } from "./constants";

export async function fetchBalanceSheet() {
  return fetch(XERO_BALANCE_SHEET_API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return {
          data: null,
          error: `Error: ${res.statusText}`,
          status: res.status,
        };
      }
      return res.json().then((data: BalanceSheet) => {
        if (!data || data.Status !== "OK") {
          return {
            data: null,
            error: "Invalid response from the balance sheet API",
            status: 500,
          };
        }
        return { data, error: null, status: 200 };
      });
    })
    .catch((error) => {
      return {
        data: null,
        error: error.message || "Unknown error",
        status: 500,
      };
    });
}
