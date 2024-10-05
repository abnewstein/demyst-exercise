export type Cell = {
  Value: string;
  Attributes?: Array<{
    Value: string;
    Id: string;
  }>;
};

export type RowType = "Header" | "Section" | "Row" | "SummaryRow";

export type Row = {
  RowType: RowType;
  Title?: string;
  Rows?: Array<Row>;
  Cells?: Array<Cell>;
};

export type Report = {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: Array<string>;
  ReportDate: string;
  UpdatedDateUTC: Date;
  Fields: Array<string>;
  Rows: Array<Row>;
};

export type BalanceSheet = {
  Status: string;
  Reports: Array<Report>;
  Message?: string;
};
