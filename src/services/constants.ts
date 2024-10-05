export const XERO_SERVER_URL =
  process.env.XERO_BALANCE_SHEET_SERVER || "http://localhost:3000";

export const XERO_BALANCE_SHEET_API_URL = `${XERO_SERVER_URL}/api.xro/2.0/Reports/BalanceSheet`;
