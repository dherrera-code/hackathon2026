import LineChart from "@/components/LineChart";

import { DataProps } from "@/lib/data-interface";
import { getDataArraysStats } from "@/lib/data-service";

export default async function Home() {
  let data = await getDataArraysStats();

  const prec: DataProps = {
    chartTitle: "Precipitation",
    chartLabel : "Percentage",
    month: data.arr_date,
    dataSets: data.arr_pct_precipitation,
  }

  const snow: DataProps = {
    chartTitle: "Snowpack",
    chartLabel : "Percentage",
    month: data.arr_date,
    dataSets: data.arr_pct_snowpack,
  }

  const rese: DataProps = {
    chartTitle: "Reservoir",
    chartLabel : "Percentage",
    month: data.arr_date,
    dataSets:  data.arr_pct_reservoir,
  }

  const diff_prec: DataProps = {
    chartTitle: "Precipitation",
    chartLabel : "Percentage Point Delta",
    month: data.arr_date,
    dataSets: data.arr_ppt_diff_precipitation,
  }

  const diff_snow: DataProps = {
    chartTitle: "Snowpack",
    chartLabel : "Percentage Point Delta",
    month: data.arr_date,
    dataSets: data.arr_ppt_diff_snowpack,
  }

  const diff_rese: DataProps = {
    chartTitle: "Reservoir",
    chartLabel : "Percentage Point Delta",
    month: data.arr_date,
    dataSets:  data.arr_ppt_diff_reservoir,
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <LineChart month={prec.month} chartTitle={prec.chartTitle} chartLabel={prec.chartLabel} dataSets={prec.dataSets}></LineChart>
        <LineChart month={snow.month} chartTitle={snow.chartTitle} chartLabel={snow.chartLabel} dataSets={snow.dataSets}></LineChart>
        <LineChart month={rese.month} chartTitle={rese.chartTitle} chartLabel={rese.chartLabel} dataSets={rese.dataSets}></LineChart>
        <LineChart month={diff_prec.month} chartTitle={diff_prec.chartTitle} chartLabel={diff_prec.chartLabel} dataSets={diff_prec.dataSets}></LineChart>
        <LineChart month={diff_snow.month} chartTitle={diff_snow.chartTitle} chartLabel={diff_snow.chartLabel} dataSets={diff_snow.dataSets}></LineChart>
        <LineChart month={diff_rese.month} chartTitle={diff_rese.chartTitle} chartLabel={diff_rese.chartLabel} dataSets={diff_rese.dataSets}></LineChart>
      </main>
    </div>
  );
}
