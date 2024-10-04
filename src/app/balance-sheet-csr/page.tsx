"use client";

import BalanceSheetComponent from "@/components/BalanceSheet";
import type { BalanceSheet } from "@/types/BalanceSheet";
import { useEffect, useState } from "react";

export default function BalanceSheetPage() {
  const [sheetData, setSheetData] = useState<BalanceSheet>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/balance-sheet")
      .then((res) => res.json())
      .then((data) => {
        setSheetData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <>Loading...</>;
  if (!sheetData) return <>There was an error in fetching the data</>;

  return <BalanceSheetComponent sheetData={sheetData} />;
}
