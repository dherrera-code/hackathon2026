'use client'
import React from 'react'
import { Line } from 'react-chartjs-2';

const TrendingReservChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Water Reserves!',
                data: [3, 4, 61, 62, 63, 233, 426, 73, 23, 61, 12, 300],
                fill: true,
                borderColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#FFD700');
                    // gradient.addColorStop(0.25, "#81D4FA");
                    gradient.addColorStop(0.5, "#40E0D0")
                    gradient.addColorStop(1, "#0057B8");
                    // gradient.addColorStop(1, '#1B6FD1');
                    console.log(gradient)
                    return gradient;
                },
                backgroundColor : (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

                    gradient.addColorStop(0, '#FFD700');
                    // gradient.addColorStop(0.25, "#81D4FA");
                    gradient.addColorStop(0.5, "#40E0D0")
                    gradient.addColorStop(1, "#0057B8");
                    // gradient.addColorStop(1, '#1B6FD1');
                    console.log(gradient)
                    return gradient;
                },
                tension: .3,
            }
        ],
    };
    return (
        <div className='w-120 h-120 '>
            <Line data={data}></Line>
        </div>
    )
}

export default TrendingReservChart