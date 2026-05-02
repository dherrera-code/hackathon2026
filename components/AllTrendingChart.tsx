"use client"
import { DataProps } from '@/lib/data-interface'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
export interface ThreeDataSets extends DataProps {
    snowpack: number[],
    reservoir: number[],
    precipitation: number[]
}

const AllTrendingChart = (dataList: ThreeDataSets) => {

    const [chartTitle, setChartTitle] = useState("");

    const [monthArr, setMonthArr] = useState<string[]>([])
    const [precData, setPrecData] = useState<number[]>([])
    const [snowData, setSnowData] = useState<number[]>([])
    const [reserData, setReserData] = useState<number[]>([])

    useEffect(() => {
        setChartTitle(dataList.chartTitle)
        // setChartLabel(dataList.chartLabel)
        setReserData(dataList.reservoir);
        setPrecData(dataList.precipitation)
        setSnowData(dataList.snowpack)
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
                label: "Reservoir Trend",
                data: reserData,
                fill: false,
                borderColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#FFD700');
                    gradient.addColorStop(0.5, "#40E0D0")
                    gradient.addColorStop(1, "#0057B8");
                    // gradient.addColorStop(1, '#1B6FD1');
                    console.log(gradient)
                    return gradient;
                },
                // backgroundColor: (context: any) => {
                //     const chart = context.chart;
                //     const { ctx, chartArea } = chart;
                //     if (!chartArea) return null;

                //     const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                //     gradient.addColorStop(0, '#E0F7FA');
                //     gradient.addColorStop(0.25, "#81D4FA");
                //     gradient.addColorStop(0.5, "#29B6F6")
                //     gradient.addColorStop(0.75, "#0288D1");
                //     gradient.addColorStop(1, '#01579B');
                //     console.log(gradient)
                //     return gradient;
                // },
                tension: .3,
            },
            {
                label: "Precipitation Trend",
                data: precData,
                fill: false,
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
                // backgroundColor: (context: any) => {
                //     const chart = context.chart;
                //     const { ctx, chartArea } = chart;
                //     if (!chartArea) return null;

                //     const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                //     gradient.addColorStop(0, '#E0F7FA');
                //     gradient.addColorStop(0.25, "#81D4FA");
                //     gradient.addColorStop(0.5, "#29B6F6")
                //     gradient.addColorStop(0.75, "#0288D1");
                //     gradient.addColorStop(1, '#01579B');
                //     console.log(gradient)
                //     return gradient;
                // },
                tension: .3,
            },
            {
                label: "Snowfall Trend",
                data: snowData,
                fill: false,
                borderColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#F3ECFF');
                    // gradient.addColorStop(0.25, "#81D4FA");
                    gradient.addColorStop(0.5, "#A99BFF")
                    gradient.addColorStop(1, "#3E2C7A");
                    // gradient.addColorStop(1, '#1B6FD1');
                    console.log(gradient)
                    return gradient;
                },
                // backgroundColor: (context: any) => {
                //     const chart = context.chart;
                //     const { ctx, chartArea } = chart;
                //     if (!chartArea) return null;

                //     const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                //     gradient.addColorStop(0, '#E0F7FA');
                //     gradient.addColorStop(0.25, "#81D4FA");
                //     gradient.addColorStop(0.5, "#29B6F6")
                //     gradient.addColorStop(0.75, "#0288D1");
                //     gradient.addColorStop(1, '#01579B');
                //     console.log(gradient)
                //     return gradient;
                // },
                tension: .3,
            }
        ],
    };
    return (
        <div className='min-w-170 max-h-fit '>
            {/* <h1 className='text-zinc-900'>Example 1: Line Chart</h1> */}
            <Line options={options} data={data} />
        </div>
    )
}

export default AllTrendingChart