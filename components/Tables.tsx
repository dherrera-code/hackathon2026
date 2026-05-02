'use client';

import { DataArrays, DataPoint } from '@/lib/data-interface';
import { getDataArrays, getDataPoints } from '@/lib/data-service';
import React, { useEffect, useState } from 'react';

const Tables = () => {
  const [datapoints, setDatapoints] = useState<DataPoint[]>([]);
    const [dataarrays, setDataArrays] = useState<DataArrays[]>([]);


  useEffect(() => {
    async function loadData() {
      const data = await getDataPoints();
      setDatapoints(data);
      const dataArrays = await getDataArrays();
      setDataArrays(Array(dataArrays))
    }
    loadData();
  }, []);

  return (
    <div className="overflow-x-auto flex flex-col justify-center rounded-2xl!">
      <h2 className='text-[#90E0EF] font-bold text-2xl my-5'>Reservoir Capacity Monitoring</h2>
          <p className='text-[#90E0EF] font-bold text-xl my-5'>Regional water storage telemetry and historical trends.</p>
        <table className="  text-black bg-gradient-to-b from-cyan-500 to-blue-500 border-4 border-[#2a348d] rounded-2xl!">
        <thead className="">
          <tr>
            <th className="text-left font-bold min-w-[150px] max-w-md">Date</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Reservoir</th>

          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className=''>
              <td className="text-black pl-5">
                {point.Date}
              </td>
              <td className="text-black">
                {point.Reservoir}
              </td>
                <td className="text-black">
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <h2 className='text-[#90E0EF] font-bold text-2xl my-5'>Snowpack Capacity Monitoring</h2>
          <p className='text-[#90E0EF] font-bold text-xl my-5'>Regional water storage telemetry and historical trends.</p>
        <table className=" text-black bg-gradient-to-b from-cyan-500 to-blue-500 border-4 border-[#2a348d] rounded-2xl!">
        <thead className=" ">
          <tr>
            <th className="text-left font-bold min-w-[150px] max-w-md">Date</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Snowpack</th>

          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className=''>
              <td className="text-black pl-5">
                {point.Date}
              </td><td className="text-black">
                {point.Snowpack}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='text-[#90E0EF] font-bold text-2xl my-5'>Precipitation Capacity Monitoring</h2>
          <p className='text-[#90E0EF] font-bold text-xl my-5'>Regional water storage telemetry and historical trends.</p>
      <table className="   text-black bg-gradient-to-b from-cyan-500 to-blue-500 border-4 border-[#2a348d] rounded-2xl!">
        <thead className="">
          <tr>
            <th className="text-left font-bold  min-w-[150px] max-w-md">Date</th>
            <th className="text-left font-bold min-w-[150px] max-w-md">Precipitation</th>

          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className=''>
              <td className="text-black pl-5">
                {point.Date}
              </td><td className="text-black">
                {point.Precip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  
  );
};

export default Tables;