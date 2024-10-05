import type { BalanceSheet } from "@/types/BalanceSheet";
import ReportTable from "./ReportTable";
import { Fragment } from "react";
type BalanceSheetProps = {
  sheetData: BalanceSheet;
};

export default function BalanceSheet({ sheetData }: BalanceSheetProps) {
  return (
    <div className="m-20">
      {sheetData.Reports.map((report, i) => {
        return (
          <Fragment key={`report-${i}`}>
            {report.ReportTitles.map((title) => (
              <h1 key={title} className="text-3xl mb-4">
                {title}
              </h1>
            ))}
            <ReportTable report={report} />
          </Fragment>
        );
      })}
    </div>
  );
}
