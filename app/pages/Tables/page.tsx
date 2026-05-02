'use client';

import { DataArrays, DataPoint } from '@/lib/data-interface';
import { getDataPoints } from '@/lib/data-service';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [datapoints, setDatapoints] = useState<DataPoint[]>([]);
    const [dataarrays, setDataArrays] = useState<DataArrays[]>([]);


  useEffect(() => {
    async function loadData() {
      const data = await getDataPoints();
      setDatapoints(data);
    }
    loadData();
  }, []);

  return (
    <div className="overflow-x-auto ">
        <table className=" bg-[#90E0EF] text-black">
        <thead className="bg-[#90E0EF]">
          <tr>
            <th className="text-left font-bold w-md">Date</th>
            <th className="text-left font-bold w-md">Reservoir</th>

          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className='bg-white'>
              <td className="text-black pl-5">
                {point.Date}
              </td><td className="text-black">
                {point.Reservoir}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <table className=" bg-[#90E0EF] rounded-2xl  text-black">
        <thead className="bg-[#90E0EF] ">
          <tr>
            <th className="text-left font-bold w-md">Date</th>
            <th className="text-left font-bold w-md">Snowpack</th>

          </tr>
        </thead>
        <tbody>
          {datapoints && datapoints.map((point, index) => (
            <tr key={index} className='bg-white'>
              <td className="text-black pl-5">
                {point.Date}
              </td><td className="text-black">
                {point.Snowpack}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className=" bg-[#90E0EF]  text-black">
        <thead className="bg-[#90E0EF] rounded-2xl">
          <tr>
            <th className="text-left font-bold w-md">Date</th>
            <th className="text-left font-bold w-md">Precipitation</th>

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  
  );
};

export default Page;