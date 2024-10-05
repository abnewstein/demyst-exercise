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
    <div className="shadow overflow-hidden rounded border-b border-gray-200">
      <table className="table-auto" key={report.ReportID}>
        <thead className="bg-slate-800 text-white text-xl">
          {headerData.map(({ Cells: cells, RowType }, i) => (
            <tr key={`header-${i}`}>
              {cells && <Cells cells={cells} rowType={RowType} />}
            </tr>
          ))}
        </thead>
        <tbody className="text-gray-700">
          {sectionData.map((section, i) => {
            const isSectionHeader = section.Title && section.Rows?.length === 0;
            return (
              <Fragment key={`section-${i}`}>
                <tr
                  key={`section-${i}`}
                  className={`${
                    isSectionHeader
                      ? "bg-sky-700 border-blue-200 text-white"
                      : "bg-sky-100"
                  } border-b `}
                >
                  <th
                    className="px-4 py-2 text-lg"
                    colSpan={isSectionHeader ? 3 : 1}
                  >
                    {section.Title}
                  </th>
                  {!isSectionHeader && (
                    <>
                      <th className="px-4 py-2 text-lg"></th>
                      <th className="px-4 py-2 text-lg"></th>
                    </>
                  )}
                </tr>
                {section.Rows?.map(({ RowType, Cells: cells }, i) => (
                  <tr
                    key={`subsection-${i}`}
                    className={`${i % 2 !== 0 ? "bg-gray-100" : ""}`}
                  >
                    {cells && <Cells cells={cells} rowType={RowType} />}
                  </tr>
                ))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
