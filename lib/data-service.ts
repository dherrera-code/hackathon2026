import { DataArrays, DataArraysStats, DataPoint, DataPointStats, FakeData } from "./data-interface";

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
      date:                   arr[i].Date,
      pct_snowpack:           +(arr[i].Snowpack),
      pct_precipitation:      +(arr[i].Precip),
      pct_reservoir:          +(arr[i].Reservoir),
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
    arr_date:                   arr.map(v => v.date),
    arr_pct_snowpack:           arr.map(v => v.pct_snowpack),
    arr_pct_precipitation:      arr.map(v => v.pct_precipitation),
    arr_pct_reservoir:          arr.map(v => v.pct_reservoir),
    arr_ppt_diff_snowpack:      arr.map(v => v.ppt_diff_snowpack),
    arr_ppt_diff_precipitation: arr.map(v => v.ppt_diff_precipitation),
    arr_ppt_diff_reservoir:     arr.map(v => v.ppt_diff_reservoir),
  };

  return obj;
}

export async function getFakeData() {
  let real = await getDataPointsStats();
  let years = real.length / 12;
  let fake: DataPointStats[] = [];

  // * SUM =========================================

  let sum_s = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  let sum_p = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  let sum_r = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

  for (let i = 0; i < real.length; i++) {
    let m = i % 12;
    sum_s[m] += +(real[i].pct_snowpack);
    sum_p[m] += +(real[i].pct_precipitation);
    sum_r[m] += +(real[i].pct_reservoir);
  }

  // * AVG =========================================

  let avg_s = sum_s.map(v => v / years);
  let avg_p = sum_p.map(v => v / years);
  let avg_r = sum_r.map(v => v / years);

  // * GEN =========================================

  for (let i = real.length; i < real.length + 12; i++) {
    let m = i % 12;
    let tmp: DataPointStats = {
      date:                   `${m + 1}/1/26`,
      pct_snowpack:           avg_s[m],
      pct_precipitation:      avg_p[m],
      pct_reservoir:          avg_r[m],
      ppt_diff_snowpack:      0,
      ppt_diff_precipitation: 0,
      ppt_diff_reservoir:     0,
    };

    if (i == real.length) {
      tmp.ppt_diff_snowpack       = avg_s[m] - real[i - 1].pct_snowpack;
      tmp.ppt_diff_precipitation  = avg_p[m] - real[i - 1].pct_precipitation;
      tmp.ppt_diff_reservoir      = avg_r[m] - real[i - 1].pct_reservoir;
    } else {
      tmp.ppt_diff_snowpack       = avg_s[m] - avg_s[m - 1];
      tmp.ppt_diff_precipitation  = avg_p[m] - avg_p[m - 1];
      tmp.ppt_diff_reservoir      = avg_r[m] - avg_r[m - 1];
    }

    fake.push(tmp);
  }

  // * OBJ =========================================

  let points = [ ...real, ...fake ];

  let arrays: DataArraysStats = {
    arr_date:                   points.map(v => v.date),
    arr_pct_snowpack:           points.map(v => v.pct_snowpack),
    arr_pct_precipitation:      points.map(v => v.pct_precipitation),
    arr_pct_reservoir:          points.map(v => v.pct_reservoir),
    arr_ppt_diff_snowpack:      points.map(v => v.ppt_diff_snowpack),
    arr_ppt_diff_precipitation: points.map(v => v.ppt_diff_precipitation),
    arr_ppt_diff_reservoir:     points.map(v => v.ppt_diff_reservoir),
  };

  let obj: FakeData = { points, arrays };

  return obj;
}
