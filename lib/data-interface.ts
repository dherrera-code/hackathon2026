
export interface DataPoint {
  Date: string;
  Snowpack: number;
  Precip: number;
  Reservoir: number;
}

export interface DataArrays {
  date:           string[];
  snowpack:       number[];
  precipitation:  number[];
  reservoir:      number[];
}

export interface DataPointStats {
  date:                   string;
  pct_snowpack:           number;
  pct_precipitation:      number;
  pct_reservoir:          number;
  ppt_diff_snowpack:      number;
  ppt_diff_precipitation: number;
  ppt_diff_reservoir:     number;
}

export interface DataArraysStats {
  arr_date:                   string[];
  arr_pct_snowpack:           number[];
  arr_pct_precipitation:      number[];
  arr_pct_reservoir:          number[];
  arr_ppt_diff_snowpack:      number[];
  arr_ppt_diff_precipitation: number[];
  arr_ppt_diff_reservoir:     number[];
}

export interface DataProps  {
    month : string []
    chartTitle : string
    chartLabel: string
    dataSets : number []
}
