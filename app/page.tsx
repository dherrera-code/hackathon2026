import AllTrendingChart from "@/components/AllTrendingChart";
import LineChart from "@/components/LineChart";
import Tables from "@/components/Tables";
import TrendingPrecChart from "@/components/TrendingChart";
import TrendingReservChart from "@/components/TrendingReservChart";
import TrendingSnowChart from "@/components/TrendingSnowChart";

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
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[url('@/public/cristian-palmer-XexawgzYOBc-unsplash.jpg')] bg-fixed min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 m-20 gap-5">
        <img src="Hackathon-Visualizer-5-2-2026.png" alt="Hackathon visualizer" className='w-[clamp(10rem,50vw,50vw)] flex place-self-center'/>
        
        <div className="bg-white rounded-2xl p-4 "><LineChart month={prec.month} chartTitle={prec.chartTitle} chartLabel={prec.chartLabel} dataSets={prec.dataSets}></LineChart></div>
        <div className="bg-white rounded-2xl p-4"><LineChart month={snow.month} chartTitle={snow.chartTitle} chartLabel={snow.chartLabel} dataSets={snow.dataSets}></LineChart></div>
        <div className="bg-white rounded-2xl p-4 "><LineChart month={rese.month} chartTitle={rese.chartTitle} chartLabel={rese.chartLabel} dataSets={rese.dataSets}></LineChart></div>
        <div className="bg-white rounded-2xl p-4"><TrendingPrecChart month={diff_prec.month} chartTitle={diff_prec.chartTitle} chartLabel={diff_prec.chartLabel} dataSets={diff_prec.dataSets}></TrendingPrecChart></div>
        <div className="bg-white rounded-2xl p-4"><TrendingSnowChart month={diff_snow.month} chartTitle={diff_snow.chartTitle} chartLabel={diff_snow.chartLabel} dataSets={diff_snow.dataSets}></TrendingSnowChart></div>
        <div className="bg-white rounded-2xl p-4"><TrendingReservChart month={diff_rese.month} chartTitle={diff_rese.chartTitle} chartLabel={diff_rese.chartLabel} dataSets={diff_rese.dataSets}></TrendingReservChart></div>
        {/* <div className="bg-white rounded-2xl p-4"><AllTrendingChart snowpack={diff_snow.dataSets} reservoir={diff_rese.dataSets} precipitation={diff_prec.dataSets} month={diff_prec.month} chartTitle={"All Trending Components"} chartLabel={""} dataSets={[]} /></div> */}
      
      <Tables/>
      </main>
    </div>
  );
}
 