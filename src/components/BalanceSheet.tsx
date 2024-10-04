import { BalanceSheet } from "@/types/BalanceSheet";
type BalanceSheetComponentProps = {
  sheetData: BalanceSheet;
};
export default function BalanceSheetComponent({
  sheetData,
}: BalanceSheetComponentProps) {
  return <pre>{JSON.stringify(sheetData, null, 2)}</pre>;
}
