import BalanceSheetComponent from "@/components/BalanceSheet";
import { fetchBalanceSheet } from "@/services/fetchBalanceSheet";

export default async function BalanceSheetPage() {
  const sheetData = await fetchBalanceSheet();
  return <BalanceSheetComponent sheetData={sheetData} />;
}
