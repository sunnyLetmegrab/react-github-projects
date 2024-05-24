import React from 'react'
import Chart from 'react-apexcharts';
export default function PieChart() {
    return (
        <Chart type='donut' options={{
            chart: {
                id: "basic-pie",
                width:'200',
                toolbar: {
                    show: false
                },
            
                type: 'donut',
            },
            dataLabels:{
                enabled:false
            },
            legend:{
                position:'bottom'
            }



        }
        } series={[44, 55, 41, 17, 15]} />)
}
