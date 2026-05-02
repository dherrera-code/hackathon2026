"use client"

import dynamic from 'next/dynamic';

import 'chart.js/auto';
import { DataProps } from '@/lib/data-interface';
import { useEffect, useState } from 'react';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});


const LineChart = (dataList : DataProps) => {

    const [chartTitle, setChartTitle] = useState("");
    const [chartLabel, setChartLabel] = useState("")
    const [monthArr, setMonthArr] = useState<string []>([])
    const [dataNumbers, setDataNumbers] = useState<number []>([])
    // const [hexColor, setHexColor] = useState("")

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
                tension: 0.2,
                color: "#FF0000"
            }
        ]
    };

    useEffect( () => {
        setChartTitle(dataList.chartTitle)
        setChartLabel(dataList.chartLabel)
        setDataNumbers(dataList.dataSets);
        setMonthArr(dataList.month)
        // setHexColor(dataList.hexLineColor)
    }, [])
        // console.log(dataList)
    return (
        <div className='min-w-170 max-h-fit '>
            {/* <h1 className='text-zinc-900'>Example 1: Line Chart</h1> */}
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart