"use client"

import dynamic from 'next/dynamic';

import 'chart.js/auto';

import { DataProps } from '@/lib/interface';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});

// const data = {
//         labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
//         datasets: [
//             {
//                 label: 'Blue Water Usages Chart',
//                 data: [65, 59, 80, 81, 56, 101, 3, 53, 43, 234, 34, 63],
//                 fill: false,
//                 borderColor: '#0000FF',
//                 tension: 0.1,
//             },
//             {
//                 label: 'Red Water Usages Chart',
//                 data: [125, 159, 180, 21, 36, 61, 32, 33, 34, 134, 134, 53],
//                 fill: true,
//                 borderColor: '#FF0000',
//                 color: "#000000",
//                 tension: 0.1,
//             },
//             {
//                 label: 'Green Water Usages Chart',
//                 data: [3,4,61,62,63,233,426,73,23,61,12,300],
//                 fill: true,
//                 borderColor: '#00FFFF',
//                 tension: .3,
//                 color: "#000000",
//             }
//         ],
//     };



const LineGraph = (dataList : DataProps) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: dataList.chartTitle
            }
        }
    }

    const data = {
        labels: dataList.month,
        datasets: [
            {
                label: dataList.chartLabel,
                data: dataList.datasets,
                fill: false,
                tension: 0.2,
                color: "#0000FF"
            }
        ]
    };

    return (
        <div className='min-w-170 min-h-170 '>
            <h1 className='text-zinc-900'>Example 1: Line Chart</h1>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineGraph