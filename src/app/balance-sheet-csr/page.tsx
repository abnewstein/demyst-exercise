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
  } = useSWR(`${process.env.URL || ""}/api/balance-sheet`, fetcher);

  if (isLoading) return <Loading />;
  if (error) return <>{`${error.message.Status} - ${error.message.Error}`}</>;

  return <BalanceSheet sheetData={sheetData} />;
}
