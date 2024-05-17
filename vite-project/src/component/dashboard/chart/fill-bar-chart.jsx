import React from 'react'
import Chart from 'react-apexcharts'
import staticData from '../../../static'
export default function FillAreachart() {
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
                    colors:{
                        backgroundBarColors:'#e4e4e4',
                        backgroundBarOpacity:.1
                    }
                }
            }
        }} series={[{
            data: staticData['bar-chart'].sort((a,b)=>a.y-b.y)
        }]} />
    )
}
