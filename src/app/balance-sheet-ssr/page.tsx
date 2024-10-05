import { BalanceSheet } from "@/components/BalanceSheet";
import { fetchBalanceSheet } from "@/services/fetchBalanceSheet";

export default async function BalanceSheetPage() {
  const { data, error } = await fetchBalanceSheet();
  if (error || !data) return <>{error}</>;
  return <BalanceSheet sheetData={data} />;
}
