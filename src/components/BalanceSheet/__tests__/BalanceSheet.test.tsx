import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import BalanceSheet from "../BalanceSheet";
import type { BalanceSheet as BalanceSheetType } from "@/types/BalanceSheet";
import mockBalanceSheet from "./reports-fixture.json";

describe("BalanceSheet Component", () => {
  it("renders report data correctly", () => {
    const mockData = mockBalanceSheet as BalanceSheetType;
    render(<BalanceSheet sheetData={mockData} />);

    expect(screen.getByText("Balance Sheet")).toBeInTheDocument();
    expect(screen.getByText("Demo Org")).toBeInTheDocument();
    expect(screen.getByText("As at 03 October 2024")).toBeInTheDocument();
    expect(screen.getByText("Total Bank")).toBeInTheDocument();
    expect(screen.getByText("104076.70")).toBeInTheDocument();
    expect(screen.getByText("104049.60")).toBeInTheDocument();
  });

  it("renders multiple report titles if provided", () => {
    const modifiedSheetData = {
      ...mockBalanceSheet,
      Reports: [
        {
          ...mockBalanceSheet.Reports[0],
          ReportTitles: ["Balance Sheet Report", "Q1 Summary"],
        },
      ],
    } as BalanceSheetType;

    render(<BalanceSheet sheetData={modifiedSheetData} />);

    expect(screen.getByText("Balance Sheet Report")).toBeInTheDocument();
    expect(screen.getByText("Q1 Summary")).toBeInTheDocument();
  });
});
