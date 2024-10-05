import { BalanceSheet } from "@/types/BalanceSheet";
type BalanceSheetComponentProps = {
  sheetData: BalanceSheet;
};

export default function BalanceSheetComponent({
  sheetData,
}: BalanceSheetComponentProps) {
  return (
    <>
      {sheetData.Reports.map((report) => {
        const headerData = report.Rows.filter(
          ({ RowType }) => RowType === "Header"
        );
        const sectionData = report.Rows.filter(
          ({ RowType }) => RowType === "Section"
        );
        return (
          <>
            {report.ReportTitles.map((title) => (
              <h1 key={title}>{title}</h1>
            ))}
            <table className="" key={report.ReportID}>
              <thead>
                {headerData.map((header, i) => (
                  <tr key={`header-${i}`}>
                    {header.Cells?.map(({ Value }) => (
                      <th key={Value}>{Value}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {sectionData.map((section, i) => (
                  <>
                    <tr key={`section-${i}`}>
                      <th>{section.Title}</th>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </>
        );
      })}
      {/* <pre>{JSON.stringify(sheetData, null, 2)}</pre> */}
    </>
  );
}
