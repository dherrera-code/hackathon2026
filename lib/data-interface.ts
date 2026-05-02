
export interface DataPoint {
  Date: string;
  Snowpack: number;
  Precip: number;
  Reservoir: number;
}

export interface DataArrays {
  date: string[];
  snowpack: number[];
  precipitation: number[];
  reservoir: number[];
}

export interface DataProps  {
    month : string []
    chartTitle : string
    chartLabel: string
    dataSets : number []
}
