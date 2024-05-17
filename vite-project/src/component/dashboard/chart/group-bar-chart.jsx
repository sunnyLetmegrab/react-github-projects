import { data } from 'autoprefixer'
import React from 'react'
import Chart from 'react-apexcharts'
export default function GroupBarChart() {
    return (
        <Chart type='bar' options={{
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                },
                type: 'bar',
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
            },

        }
        } series={[
            {
                data: [
                    {
                        x: 1,
                        y: 23,
                        fillColor: '#1a56db',

                    },
                    {
                        x: 2,
                        y: 12,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 3,
                        y: 22,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 4,
                        y: 5,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 5,
                        y: 5,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 6,
                        y: 10,
                        fillColor: '#1a44db',

                    },
                ],
            },
            {
                data: [
                    {
                        x: 1,
                        y: 22,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 2,
                        y: 5,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 3,
                        y: 5,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 4,
                        y: 10,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 5,
                        y: 23,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 6,
                        y: 12,
                        fillColor: '#1a44db',

                    },

                ]
            },
            {
                data: [

                    {
                        x: 1,
                        y: 5,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 2,
                        y: 5,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 3,
                        y: 10,
                        fillColor: '#1a44db',

                    }, {
                        x: 4,
                        y: 23,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 5,
                        y: 12,
                        fillColor: '#1a44db',

                    },
                    {
                        x: 6,
                        y: 22,
                        fillColor: '#1a44db',

                    },
                ]
            },

        ]} />
    )
}
