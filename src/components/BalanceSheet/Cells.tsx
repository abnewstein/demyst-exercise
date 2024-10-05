import type { Cell, RowType } from "@/types/BalanceSheet";

type CellsProps = {
  cells: Array<Cell>;
  rowType: RowType;
};

export default function Cells({ cells, rowType }: CellsProps) {
  const CellTag: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    rowType === "Header" ? <th>{children}</th> : <td>{children}</td>;
  return cells.map(({ Value }, i) =>
    rowType === "SummaryRow" ? (
      <CellTag key={`${Value}-${i}`}>
        <b>{Value}</b>
      </CellTag>
    ) : (
      <CellTag key={`${Value}-${i}`}>{Value}</CellTag>
    )
  );
}
