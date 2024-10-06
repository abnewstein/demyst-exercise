export const dynamic = "force-dynamic";

import { BalanceSheet } from "@/components/BalanceSheet";
import { fetchBalanceSheet } from "@/services/fetchBalanceSheet";

export default async function BalanceSheetPage() {
  const { data, error, status } = await fetchBalanceSheet();
  if (error || !data) return <>{`${status} - ${error}`}</>;
  return <BalanceSheet sheetData={data} />;
}
