import { DataPoint } from "./data-interface";

export async function get(): Promise<DataPoint[]> {
  try {
    const res = await fetch("https://scoringapi.h2ohackathon.org/Challenge/json");
    if (!res.ok) throw new Error("NOT OK");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
