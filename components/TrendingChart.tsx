'use client'
import React from 'react'
import { Line } from 'react-chartjs-2';

const TrendingChart = () => {

    // const data = {
    //     labels: [],
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: [1,4,2,54,2,4,2,5,2,2],
    //             borderColor: (context : any) => {
    //                 console.log(context)
    //             },
    //             backgroundColor: "FF00FF",
    //         },
    //         {
    //             label: 'Dataset 2',
    //             data: [2,3,5,3,2,54,2,2,4,2,24,3],
    //             borderColor: "#0000FF",
    //             backgroundColor: "#000FFF",
    //         }
    //     ]
    // }

    const data = {
        labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [
            {
                label: 'Green Water Usages Chart',
                data: [3,4,61,62,63,233,426,73,23,61,12,300],
                fill: true,
                borderColor: (context : any) => {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if(!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, '#d4dfed');
                    gradient.addColorStop(0.25, "#b3d3ed");
                    gradient.addColorStop(0.5, "#62cff4")
                    gradient.addColorStop(0.75, "#2c67f2");
                    gradient.addColorStop(1, '#12063b');
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

    // const config = {
    //     type: 'bar',
    //     data: data,
    //     options: {
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 position: 'top',
    //             },
    //             title: {
    //                 display: true,
    //                 text: 'Chart.js Bar Chart'
    //             }
    //         }
    //     },
    // };

    return (
        <div className='w-120 h-120 '>TrendingChart

        <Line data={data}></Line>
        </div>
    )
}

export default TrendingChart