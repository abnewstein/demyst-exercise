import { vi, it, describe, expect, Mock } from "vitest";
import { GET } from "./route";
import { fetchBalanceSheet } from "@/services/fetchBalanceSheet";

vi.mock("@/services/fetchBalanceSheet");

describe("GET API - fetchBalanceSheet", () => {
  it("should return data with status 200", async () => {
    const mockData = {
      data: {
        Status: "OK",
        Reports: [
          {
            ReportID: "123456",
          },
        ],
      },
      error: null,
      status: 200,
    };

    (fetchBalanceSheet as Mock).mockResolvedValue(mockData);

    const response = await GET();

    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json).toEqual(mockData.data);
  });

  it("should return error with status 500", async () => {
    const mockError = {
      data: null,
      error: "Error fetching the balance sheet.",
      status: 500,
    };

    (fetchBalanceSheet as Mock).mockResolvedValue(mockError);

    const response = await GET();

    expect(response.status).toBe(500);
    const json = await response.json();
    expect(json.Error).toBe(mockError.error);
  });

  it("should handle non-OK response status from fetchBalanceSheet", async () => {
    const mockError = {
      data: null,
      error: "Error: Not Found",
      status: 404,
    };

    (fetchBalanceSheet as Mock).mockResolvedValue(mockError);

    const response = await GET();

    expect(response.status).toBe(404);
    const json = await response.json();
    expect(json.Error).toBe(mockError.error);
  });
});
