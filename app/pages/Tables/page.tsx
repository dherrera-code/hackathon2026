'use client';

import { DataArrays, DataArraysStats, DataPoint, DataPointStats } from '@/lib/data-interface';
import { getDataArrays, getDataArraysStats, getDataPoints, getDataPointsStats } from '@/lib/data-service';
import { stat } from 'fs';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [datapoints, setDatapoints] = useState<DataPointStats[]>([]);
    const [dataarrays, setDataArrays] = useState<DataArrays>();
    const [stats, setStats] = useState<DataArraysStats>();

  useEffect(() => {
    async function loadData() {
      const data = await getDataPointsStats();
      setDatapoints(data);
      const dataArrays = await getDataArrays();
      setDataArrays(dataArrays)
      const dataStats = await getDataArraysStats();
      setStats(dataStats)
    }
    loadData();
  }, []);

  return (
    <div className="overflow-x-auto flex flex-col justify-center ">
      <h2 className='text-[#90E0EF] font-bold text-2xl my-5'>Reservoir Capacity Monitoring</h2>
          <p className='text-[#90E0EF] font-bold text-xl my-5'>Regional water storage telemetry and historical trends.</p>
        <table className=" bg-[#90E0EF] text-black">
        <thead className="bg-[#90E0EF]">
          <tr>
            <th className="text-left font-bold min-w-[150px] max-w-md">Date</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Reservoir</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Difference</th>
          </tr>
        </thead>
        <tbody>
          {Array(datapoints) && datapoints.map((point, index) => (
            <tr key={index} className='bg-white'>
              <td className="text-black pl-5">
                {point.date}
              </td>
              <td className="text-black">
                {point.pct_reservoir}
              </td>
              <td className="text-black">
                {point.ppt_diff_reservoir}
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <h2 className='text-[#90E0EF] font-bold text-2xl my-5'>Snowpack Capacity Monitoring</h2>
          <p className='text-[#90E0EF] font-bold text-xl my-5'>Regional water storage telemetry and historical trends.</p>
        <table className=" bg-[#90E0EF] rounded-2xl  text-black">
        <thead className="bg-[#90E0EF] ">
          <tr>
            <th className="text-left font-bold min-w-[150px] max-w-md">Date</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Snowpack</th>

          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className='bg-white'>
              <td className="text-black pl-5">
                {point.date}
              </td><td className="text-black">
                {point.pct_snowpack}
              </td>
              <td className="text-black">
                {point.ppt_diff_snowpack}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='text-[#90E0EF] font-bold text-2xl my-5'>Precipitation Capacity Monitoring</h2>
          <p className='text-[#90E0EF] font-bold text-xl my-5'>Regional water storage telemetry and historical trends.</p>
      <table className=" bg-[#90E0EF]  text-black">
        <thead className="bg-[#90E0EF] rounded-2xl!">
          <tr>
            <th className="text-left font-bold  min-w-[150px] max-w-md">Date</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Precipitation</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Difference</th>
          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className='bg-white'>
              <td className="text-black pl-5">
                {point.Date}
              </td><td className="text-black">
                {point.Precip}
              </td>
              <td className="text-black">
                {point.Precip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  
  );
};

export default Page;