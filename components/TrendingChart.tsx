'use client'
import { DataProps } from '@/lib/data-interface';
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

const TrendingPrecChart = (dataList: DataProps) => {

    const [chartTitle, setChartTitle] = useState("");
    const [chartLabel, setChartLabel] = useState("")
    const [monthArr, setMonthArr] = useState<string[]>([])
    const [dataNumbers, setDataNumbers] = useState<number[]>([])

     useEffect( () => {
            setChartTitle(dataList.chartTitle)
            setChartLabel(dataList.chartLabel)
            setDataNumbers(dataList.dataSets);
            setMonthArr(dataList.month)
            // setHexColor(dataList.hexLineColor)
        }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: chartTitle
            }
        }
    }

    const data = {
        labels: monthArr,
        datasets: [
            {
                label: chartLabel,
                data: dataNumbers,
                fill: true,
                borderColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#E0F7FA');
                    gradient.addColorStop(0.25, "#81D4FA");
                    gradient.addColorStop(0.5, "#29B6F6")
                    gradient.addColorStop(0.75, "#0288D1");
                    gradient.addColorStop(1, '#01579B');
                    console.log(gradient)
                    return gradient;
                },
                backgroundColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#E0F7FA');
                    gradient.addColorStop(0.25, "#81D4FA");
                    gradient.addColorStop(0.5, "#29B6F6")
                    gradient.addColorStop(0.75, "#0288D1");
                    gradient.addColorStop(1, '#01579B');
                    console.log(gradient)
                    return gradient;
                },
                tension: .3,
            },
            // {
            //     label: 'Water Usages Chart 2',
            //     data: [3,4,61,62,63,233,426,73,23,61,12,300],
            //     fill: true,
            //     borderColor: (context : any) => {
            //         const chart = context.chart;
            //         const {ctx, chartArea} = chart;
            //         if(!chartArea) return null;

            //         const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            //         gradient.addColorStop(0, 'red');
            //         gradient.addColorStop(0.25, "orange");
            //         gradient.addColorStop(0.75, "cyan");
            //         gradient.addColorStop(1, 'blue');
            //         console.log(gradient)
            //         return gradient;
            //     },
            //     tension: .3,
            // }
        ],
    };

    return (
        <div className='min-w-170 max-h-fit '>
            {/* <h1 className='text-zinc-900'>Example 1: Line Chart</h1> */}
            <Line options={options} data={data} />
        </div>

    )
}

export default TrendingPrecChart