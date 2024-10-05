export const XERO_SERVER_URL =
  process.env.XERO_SERVER || "http://127.0.0.1:3000";

export const XERO_BALANCE_SHEET_API_URL = `${XERO_SERVER_URL}/api.xro/2.0/Reports/BalanceSheet`;
