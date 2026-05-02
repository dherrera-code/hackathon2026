import { DataArrays, DataArraysStats, DataPoint, DataPointStats } from "./data-interface";

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
    date:           [],
    snowpack:       [],
    precipitation:  [],
    reservoir:      [],
  };

  for (let i = 0; i < arr.length; i++) {
    obj.date.push(arr[i].Date);
    obj.snowpack.push(arr[i].Snowpack);
    obj.precipitation.push(arr[i].Precip);
    obj.reservoir.push(arr[i].Reservoir);
  }

  return obj;
}

export async function getDataPointsStats(): Promise<DataPointStats[]> {
  let arr = await getDataPoints();

  let res: DataPointStats[] = [];

  for (let i = 0; i < arr.length; i++) {
    let tmp: DataPointStats = {
      date:               arr[i].Date,
      pct_snowpack:       arr[i].Snowpack,
      pct_precipitation:  arr[i].Precip,
      pct_reservoir:      arr[i].Reservoir,
      ppt_diff_snowpack:      0,
      ppt_diff_precipitation: 0,
      ppt_diff_reservoir:     0,
    };

    if (i == 0) {
      // filler case
      tmp.ppt_diff_snowpack       = arr[i].Snowpack - 100;
      tmp.ppt_diff_precipitation  = arr[i].Precip - 100;
      tmp.ppt_diff_reservoir      = arr[i].Reservoir - 100;
    } else {
      tmp.ppt_diff_snowpack       = arr[i].Snowpack - arr[i - 1].Snowpack;
      tmp.ppt_diff_precipitation  = arr[i].Precip - arr[i - 1].Precip;
      tmp.ppt_diff_reservoir      = arr[i].Reservoir - arr[i - 1].Reservoir;
    }

    res.push(tmp);
  }

  return res;
}

export async function getDataArraysStats(): Promise<DataArraysStats> {
  let arr = await getDataPointsStats();

  let obj: DataArraysStats = {
    arr_date:                   [],
    arr_pct_snowpack:           [],
    arr_pct_precipitation:      [],
    arr_pct_reservoir:          [],
    arr_ppt_diff_snowpack:      [],
    arr_ppt_diff_precipitation: [],
    arr_ppt_diff_reservoir:     [],
  };

  for (let i = 0; i < arr.length; i++) {
    obj.arr_date.push(arr[i].date);
    obj.arr_pct_snowpack.push(arr[i].pct_snowpack);
    obj.arr_pct_precipitation.push(arr[i].pct_precipitation);
    obj.arr_pct_reservoir.push(arr[i].pct_reservoir);
    obj.arr_ppt_diff_snowpack.push(arr[i].ppt_diff_snowpack);
    obj.arr_ppt_diff_precipitation.push(arr[i].ppt_diff_precipitation);
    obj.arr_ppt_diff_reservoir.push(arr[i].ppt_diff_reservoir);
  }

  return obj;
}
