import React from 'react'
import Chart from 'react-apexcharts'
import staticData from '../../../static'
export default function BarChart() {
    return (
        <Chart type='bar' height='180px' options={{
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    borderRadius: 2,
                    borderRadiusApplication: 'end',
                    
                }
            }
        }} series={[{
            data: staticData['bar-chart']
        }]} />
    )
}
