import { DataArrays, DataPoint } from "./data-interface";

export async function getDataPoints(): Promise<DataPoint[]> {
  try {
    const res = await fetch("https://scoringapi.h2ohackathon.org/Challenge/json");

    if (!res.ok) {
      throw new Error("NOT OK");
    }

    const arr: DataPoint[] = await res.json();

    return arr.reverse();
  } catch (err) {
    console.error(err);

    return [];
  }
}

export async function getDataArrays(): Promise<DataArrays> {
  let arr = await getDataPoints();

  let obj: DataArrays = {
    date: [],
    snowpack: [],
    precipitation: [],
    reservoir: [],
  };

  for (let i = 0; i < arr.length; i++) {
    obj.date.push(arr[i].Date);
    obj.snowpack.push(arr[i].Snowpack);
    obj.precipitation.push(arr[i].Precip);
    obj.reservoir.push(arr[i].Reservoir);
  }

  return obj;
}
