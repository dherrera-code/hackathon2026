import LineChart from "@/components/LineChart";

import { DataProps } from "@/lib/data-interface";

export default function Home() {

  const prec: DataProps = {
    chartTitle: "Water Usages Chart",
    chartLabel : "Water label",
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dataSets:
      [65, 59, 80, 81, 56, 101, 3, 53, 43, 234, 34,42]
  }

  const snow: DataProps = {
    chartTitle: "Water Usages Chart 2",
    chartLabel : "Water label",
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dataSets:
      [635, 529, 810, 821, 556, 1041, 113, 153, 143, 1234, 134,142]
  }
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        {/* <LineChart dataList={prec} /> */}
        <LineChart month={prec.month} chartTitle={prec.chartTitle} chartLabel={prec.chartLabel} dataSets={prec.dataSets}></LineChart>
        <LineChart month={snow.month} chartTitle={snow.chartTitle} chartLabel={snow.chartLabel} dataSets={snow.dataSets}></LineChart>
      </main>
    </div>
  );
}
