'use client'
import { DataProps } from '@/lib/data-interface';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

const TrendingSnowChart = (dataList: DataProps) => {

    const [chartTitle, setChartTitle] = useState("");
    const [chartLabel, setChartLabel] = useState("")
    const [monthArr, setMonthArr] = useState<string[]>([])
    const [dataNumbers, setDataNumbers] = useState<number[]>([])

    useEffect(() => {
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

                    gradient.addColorStop(0, '#F3ECFF');
                    // gradient.addColorStop(0.25, "#81D4FA");
                    gradient.addColorStop(0.5, "#A99BFF")
                    gradient.addColorStop(1, "#3E2C7A");
                    // gradient.addColorStop(1, '#1B6FD1');
                    console.log(gradient)
                    return gradient;
                },
                backgroundColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#F3ECFF');
                    gradient.addColorStop(0.5, "#A99BFF")
                    gradient.addColorStop(1, "#3E2C7A");

                    console.log(gradient)
                    return gradient;
                },
                tension: .3,
            }
        ],
    };
    return (
        <div className='min-w-170 max-h-fit '>
            <Line options={options} data={data}></Line>
        </div>
    )
}

export default TrendingSnowChart