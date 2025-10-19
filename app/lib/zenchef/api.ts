// lib/genchef/api.ts
import { GenChefMenu } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_GENCHEF_API_URL;

export async function fetchMenu(): Promise<GenChefMenu> {
  if (!API_BASE) {
    console.warn("GenChef API URL not set, using mock data");
    const { mockMenu } = await import("./mockData");
    return mockMenu;
  }

  const response = await fetch(`${API_BASE}/menu`);
  if (!response.ok) throw new Error("Failed to fetch menu");
  return response.json();
}
