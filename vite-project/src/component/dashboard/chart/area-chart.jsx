import React from 'react'
import Chart from 'react-apexcharts'
export default function AreaChart() {
  return (
    <>
      <div className='flex'>
        <div className='flex flex-col'>
          <h3 className='text-xl font-bold'>$45,385</h3>
          <h1 className='text-lg'>Sales this week</h1>
        </div>
        <p className='ml-auto'>12.5%</p>
      </div>

      <Chart
        options={{
          chart: {
            id: "basic-bar",
            toolbar:{
              show:false
            }
          },
          grid: {
            show: false,
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          plotOptions: {
            area: {
              fillTo: 'end'
            }
          },
          dataLabels: {
            enabled: false
          }, markers: {
            size: 8,
            shape: 'circle'
          }
        }}
        series={[
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [30, 40, 70, 91, 45, 50, 49, 60]
          },
          {
            name: "series-5",
            data: [49, 60, 70, 91, 30, 40, 45, 50,]
          },

        ]}
        height='422'
        type="area"

      />
    </>);
}
