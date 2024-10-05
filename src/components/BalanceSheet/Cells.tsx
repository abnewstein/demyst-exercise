import type { Cell, RowType } from "@/types/BalanceSheet";

type CellsProps = {
  cells: Array<Cell>;
  rowType: RowType;
};

export default function Cells({ cells, rowType }: CellsProps) {
  const CellTag: React.FC<{
    children: React.ReactNode;
    className?: string;
  }> = ({ children, className }) =>
    rowType === "Header" ? (
      <th className={`${className} px-6 py-4`}>{children}</th>
    ) : (
      <td className={`${className} px-4 py-2`}>{children}</td>
    );
  return cells.map(({ Value }, i) => (
    <CellTag
      key={`${Value}-${i}`}
      className={rowType === "SummaryRow" ? "font-bold" : ""}
    >
      {Value}
    </CellTag>
  ));
}
