import type { Report } from "@/types/BalanceSheet";
import { Fragment } from "react";
import Cells from "./Cells";

type ReportTableProps = {
  report: Report;
};

export default function ReportTable({ report }: ReportTableProps) {
  const headerData = report.Rows.filter(({ RowType }) => RowType === "Header");
  const sectionData = report.Rows.filter(
    ({ RowType }) => RowType === "Section"
  );
  return (
    <table className="" key={report.ReportID}>
      <thead>
        {headerData.map(({ Cells: cells, RowType }, i) => (
          <tr key={`header-${i}`}>
            {cells && <Cells cells={cells} rowType={RowType} />}
          </tr>
        ))}
      </thead>
      <tbody>
        {sectionData.map((section, i) => (
          <Fragment key={`section-${i}`}>
            <tr key={`section-${i}`}>
              <th>{section.Title}</th>
            </tr>
            {section.Rows?.map(({ RowType, Cells: cells }, i) => (
              <tr key={`subsection-${i}`}>
                {cells && <Cells cells={cells} rowType={RowType} />}
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
