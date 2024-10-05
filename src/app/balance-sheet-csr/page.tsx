"use client";

import { BalanceSheet } from "@/components/BalanceSheet/";
import Loading from "@/components/Loading";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export default function BalanceSheetPage() {
  const {
    data: sheetData,
    isLoading,
    error,
  } = useSWR("/api/balance-sheet", fetcher);

  if (isLoading) return <Loading />;
  if (error) return <>There was an error in fetching the data</>;

  return <BalanceSheet sheetData={sheetData} />;
}
