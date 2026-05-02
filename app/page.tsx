import LineGraph from "@/components/LineGraph";
import { DataProps } from "@/lib/interface";
import Image from "next/image";

export default function Home() {

  const data: DataProps = {
    chartTitle: "Water Usages Chart",
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets:
      [65, 59, 80, 81, 56, 101, 3, 53, 43, 234, 34],
  }
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <LineGraph dataList={data}></LineGraph>
      </main>
    </div>
  );
}
