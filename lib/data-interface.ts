
export interface DataPoint {
  Date: string;
  Snowpack: number;
  Precip: number;
  Reservoir: number;
}

export interface DataProps  {
    month : string []
    chartTitle : string
    chartLabel: string
    dataSets : number []
    hexLineColor : string
}
